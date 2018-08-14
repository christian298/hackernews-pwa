import React from 'react';
import { css } from 'emotion';

const story = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    font-family: sans-serif;
`;

const closeBtn = css`
    text-align: right;

    &:after {
        content: '\00d7';
        display: inline-block;
        font-size: 30px;
    }
`;

const commentMeta = css`
    display: flex;
    justify-content: space-between;
`;

const commentTime = css`
    color: #4a4a4a;
    font-size: 12px;
`;

const commentWrapper = css`
    margin-top: 10px;
`;

const commentUser = css`
    font-weight: bold;
    margin-bottom: 5px;
`;

const subComment = css`
    margin-left: 15px;
`;

const commentTitle = css`
    font-size: 18px;
    letter-spacing: 2px;
    margin-bottom: 15px;
`;

const storyContent = css`
    margin-bottom: 40px;
`;

const StoryComments = ({ comments }) => {
    return comments.map(comment => {
        const hasSubComments = comment.comments && comment.comments.length > 0;
        return (
            <div key={comment.id} className={commentWrapper}>
                <div className={commentMeta}>
                    <div className={commentUser}>{comment.user}</div>
                    <div className={commentTime}>{comment.time_ago}</div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: comment.content }} />
                {hasSubComments ? (
                    <div className={subComment}>
                        <StoryComments comments={comment.comments} />
                    </div>
                ) : null}
            </div>
        );
    });
};

const Story = ({ data, onClose }) => {
    const originalScrollPosition = window.scrollY;
    window.scrollTo(0, 0);

    return (
        <div className={story}>
            <div onClick={onClose.bind(null, originalScrollPosition)} className={closeBtn} />
            <div className={storyContent}>
                {data.type === 'link' ? (
                    <a className={commentTitle} href={data.url}>
                        {data.title}
                    </a>
                ) : (
                    <div className={commentTitle}>{data.title}</div>
                )}
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
            {data.comments ? <StoryComments comments={data.comments} /> : null}
        </div>
    );
};

export default Story;
