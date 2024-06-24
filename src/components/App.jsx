import axios from "axios";
import { Component } from "react";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import styles from "./App.module.scss";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      apiKey: "43601558-493cea9937d74fa86e08084b6",
      query: "",
      images: [],
      isLoading: false,
      page: 1,
    };
  }

  fetchImages = () => {
    this.setState({ isLoading: true });
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${this.state.apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then((res) => {
        const { data } = res;
        this.setState({
          images: data.hits,
        });
        console.log(this.state.images);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state) {
      this.fetchImages();
    }
  }

  handleSearch = searchQuery => {
    this.setState({
      query: searchQuery
    })
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        {/* <Loader /> */}
        <ImageGallery {...this.state} />
        <Button onClick={this.loadMore}/>
        {/* <Modal /> */}
      </>
    );
  }
}