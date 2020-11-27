import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Nordic Giant Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Us</h2>
            <p><strong>OSRS CC Name:</strong> Rainbow CC</p>
          <h3>Who are we?</h3>
          <p>
          We are a social LGBTQIA+ / Queer OSRS Clan that strongly believes in intersectionality and grassroots leadership, where our members have a real say in clan decisions that affect us all.
          We strive to provide a safe space where everyone can feel comfortable being themselves.
          </p>
          <h3>Eligibility</h3>
          <p>Open to all LGBT / Queer players and respectful Allies</p>
          <h3>How to Join</h3>
          <p>If you’re interested in joining, hop on our discord using the link at the top of the page and apply directly.</p>

          <h3>Code of Conduct</h3>
          <p>
            <ul>
              <li>No seriously offensive language or bigotry.</li>
              <li>Please avoid heavy or nsfw topics in the in-game clan chat.</li>
              <li>No aggressive or condescending behaviour towards clanmates.</li>
              <li>Respect other people’s boundaries, and avoid making others uncomfortable where possible.</li>
              <li>If you’re uncertain of something, ask. We understand members will have varied levels of knowledge coming into the clan, and are here to help where needed.</li>
            </ul>
          </p>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
