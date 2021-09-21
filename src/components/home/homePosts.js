import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../store/actions";
import { Spinner, Button } from "react-bootstrap";

const HomePosts = () => {
  const homePosts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getPosts({}, 1, "desc", 6));
  }, [dispatch]);
  //   console.log(homePosts);

  const loadPosts = () => {
    const page = homePosts.page + 1;
    setLoading(true);
    dispatch(getPosts(homePosts, page, "desc", 6)).then(() => {
      setLoading(false);
    });
  };
  return (
    <div>
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : null}

      {!homePosts.end & !loading ? (
        <Button variant="outline-dark" onClick={loadPosts}>
          Load more posts
        </Button>
      ) : null}
    </div>
  );
};

export default HomePosts;
