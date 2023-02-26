import React, { useState } from 'react';
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";


function App() {

  const [title, setTitle] = useState('About Me');

  const handleTitle = (currentTitle) => {
    setTitle(currentTitle);
  }

  return (
    <>
      <Header 
        handleTitle={handleTitle}
      />
      <div className="flex h-full w-full justify-center items-center">
        <Container
          title={title}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
