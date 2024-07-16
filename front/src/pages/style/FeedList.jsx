import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Feed from './Feed';

const FeedList = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const response = await axios.get('http://localhost:80/feed/feedList');
        const data = response.data.map(feed => ({
          id: feed.feedId,
          username: feed.userId ? `User ${feed.userId}` : 'Unknown',
          image: feed.feedImage,
          description: feed.feedTitle,
          likes: feed.likeCount
        }));
        setFeeds(data);
      } catch (error) {
        console.error('Error fetching feeds:', error);
      }
    };

    fetchFeeds();
  }, []);

  return (
    <div className="feed-list">
      {feeds.map(feed => (
        <Link key={feed.id} to={`/style/styledetail/${feed.id}`}>
          <Feed
            username={feed.username}
            image={feed.image}
            description={feed.description}
            likes={feed.likes}
          />
        </Link>
      ))}
    </div>
  );
};

export default FeedList;