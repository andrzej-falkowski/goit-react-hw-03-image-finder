import { Component } from "react";
import styles from "./Searchbar.module.scss";

class Searchbar extends Component {
  state = {
    searchQuery: "",
  };

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.Searchform}>
          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
        <button type="submit" className={styles.SearchButton}>
          <span className={styles.buttonLabel}>Search</span>
        </button>
      </header>
    );
  }
}

export { Searchbar };