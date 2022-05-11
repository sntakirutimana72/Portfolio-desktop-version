const wizardView = `
  <div>
    <div class="details-wizard">
      <div>
          <div class="details-top">
              <button class="details-x btn"></button>
              <img
                  src="static/images/details-portfolio-873w.png"
                  alt="Details Portfolio Image"
                  class="details-image"
              />
              <img
                  src="static/images/details-portfolio-311w.png"
                  alt="Details Portfolio Image"
                  class="details-image-mob hidden"
              />
          </div>
      </div>

      <div>
          <div class="details-heading-wrap">
              <h3 class="details-proj-heading"></h3>
              <a class="details-btn details-btn-live btn">See live</a>
              <a class="details-btn details-btn-src btn">See Source</a>
          </div>
      </div>

      <div>
          <ul class="details-skill-set">
              <li class="details-skill-desk"></li>
              <li class="details-skill-desk"></li>
              <li class="details-skill-mob hidden"></li>
              <li class="details-skill-mob hidden"></li>
              <li></li>
              <li class="details-skill-desk"></li>
              <li class="details-skill-desk"></li>
              <li class="details-skill-desk"></li>
          </ul>
      </div>
      <p class="details-para"></p>
      <div class="details-ext-refs hidden">
          <a class="details-btn details-btn-live btn">See live</a>
          <a class="details-btn details-btn-src btn">See Source</a>
      </div>
    </div>
  </div>
`;

const data = [
  {
    name: 'Keeping track of hundreds of components',
    desc: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem
      Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    image: '',
    technologies: [
      'Codekit',
      'GitHub',
      'Ruby on rails',
      'css',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    live: '#',
    source: '#',
  },
];
