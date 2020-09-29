import React from "react";


class SearchBar extends React.Component {

    state = {term:""};

    onSubmitInput (e) {
        e.preventDefault();
        this.props.onSearch(this.state.term)


    }

    render() {
        return (
    <div className="search-bar ui segment">
    <form className="ui form" onSubmit={(e) => this.onSubmitInput(e) }>
        <div className="field">
            <label htmlFor="search">Video search</label>
            <input id="search"  value={this.state.term} onChange={(e) => this.setState({ term:e.target.value })} type="text" ></input>
        </div>
    </form>
    </div>
        );
    }

};

export default SearchBar;