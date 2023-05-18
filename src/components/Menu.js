import React from "react";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSzMeAmYHvREv1zsX5cJMAMGoHr22P-aQzpA&usqp=CAU" alt="Pizza" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The Sweet Menu</h3>
            <h1>Love Becomes Sweet</h1>
            <p>
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynaus, quise
              sequitur mutationem consuetudium lectorum.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
