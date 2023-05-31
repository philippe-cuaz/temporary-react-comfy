import React from "react";
import styled from "styled-components";

const Testing = () => {
  return (
    <Wrapper>
      <h3>hello world2</h3>
      <p>hello people2</p>
      <div className="article">
        <p>this is article</p>
      </div>
      <button>click me2</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3 {
    color: red;
  }
  .article {
    p {
      color: green;
    }
  }
`;

export default Testing;
