import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import './github.css';

const GitHub = () => {
  return (
    <section className="section" id="github">
      <h2 className="section__title">GitHub</h2>
      <span className="section__subtitle">Check out my code</span>

      <div className="github__container container">
        <div className="github__calendar">
          <GitHubCalendar username="BabyGupta05" />
        </div>

        <div className="github__stats">
          <div className="github__stat" id="github-streak-stats" >
            <iframe
              title="GitHub Streak"
              src="https://github-readme-streak-stats.herokuapp.com?user=BabyGupta05&theme=transparent"
             
            ></iframe>
          </div>
          <div className="github__stat" id="github-top-langs">
            <iframe
              title="GitHub Top Languages"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=BabyGupta05&theme=transparent"
             
            ></iframe>
          </div>
          <div className="github__stat" id="github-stats-card">
            <iframe
              title="GitHub Stats"
              src="https://github-readme-stats.vercel.app/api?username=BabyGupta05&show_icons=true&&theme=transparent"
           
            ></iframe>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default GitHub;
