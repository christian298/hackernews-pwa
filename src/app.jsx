import React from 'react';
import { injectGlobal, css } from 'emotion';

import Header from './components/header/header.jsx';
import List from './components/story-list/story-list.jsx';
import Pagination from './components/pagination/pagination.jsx';
import Story from './components/story/story.jsx';
import { registerSW } from './services/sw-register.js';
import { fetchStories, fetchStory } from './services/hn.js';

injectGlobal`
    body {
        -webkit-user-select: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

const appStyle = css`
    max-width: 800px;
    margin: 0 auto;
`;

const content = css`
    position: relative;
    z-index: 0;
`;

registerSW();

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            stories: [],
            story: {},
            currentPage: 1,
            showStory: false
        };
    }

    componentDidMount() {
        this.fetchStories();
    }

    fetchStories(page = 1) {
        fetchStories(page)
            .then(stories => this.setState({ stories: stories }))
            .catch(err => console.log(err));
    }

    changePage(page) {
        this.setState({ currentPage: page }, () => this.fetchStories(this.state.currentPage));
    }

    selectItem(id) {
        fetchStory(id)
            .then(story => this.setState({ story: story, showStory: true }))
            .catch(err => console.log(err));
    }

    closeItem(scrollPosition) {
        window.scrollTo(0, scrollPosition);
        this.setState({ showStory: false });
    }

    render() {
        return (
            <div className={appStyle}>
                <Header />
                <div className={content}>
                    <List items={this.state.stories} selectItem={this.selectItem.bind(this)} />
                    <Pagination
                        currentPage={this.state.currentPage}
                        pageCount={10}
                        changePage={this.changePage.bind(this)}
                    />
                    {this.state.showStory ? (
                        <Story data={this.state.story} onClose={this.closeItem.bind(this)} />
                    ) : null}
                </div>
            </div>
        );
    }
}

export default App;
