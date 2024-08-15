const about = () => {
    const [about, setAbout] = useState(false);
    function handleClick() {
      setAbout(!about);
    }
  
    if (about) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
    return (
      <>
        <button className="btn-modal" onClick={handleClick}>
          click me
        </button>
  
        {about && (
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content"></div>
            <h2>basketmania</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
              vel ut dolorem hic laborum reprehenderit optio placeat officia
              dicta, nulla deserunt rerum ullam quidem, atque, possimus voluptates
              beatae aliquid mollitia.
            </p>
            <button onClick={handleClick} className="close-modal">
              {" "}
              close
            </button>
          </div>
        )}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora hic
          animi facere ab fuga, ipsum quaerat? Consectetur reprehenderit quia
          minus perspiciatis dicta odit dolorem nostrum corporis, distinctio
          blanditiis iure sed.
        </p>
      </>