const wizardInterface = `
  <div>
    <div class="details-wizard">
      <div>
          <div class="details-top">
              <button class="details-x btn"></button>
              <img
                  alt="Details Portfolio Image"
                  class="details-image"
              />
              <img
                  alt="Details Portfolio Image"
                  class="details-image-mob hidden"
              />
          </div>
      </div>

      <div>
          <div class="details-heading-wrap">
              <h3 class="details-proj-heading"></h3>
              <a class="details-btn details-btn-live btn" target="_blank">See live</a>
              <a class="details-btn details-btn-src btn" target="_blank">See Source</a>
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
          <a class="details-btn details-btn-live btn" target="_blank">See live</a>
          <a class="details-btn details-btn-src btn" target="_blank">See Source</a>
      </div>
    </div>
  </div>
`;

const projectContainer = `
  <div class="works-wrapper">
    <h3 class="works-h2">
      My Recent Works<br>
      <span class="hidden"></span>
    </h3>

    <div>
      <div class="works-container">
      </div>
    </div>
  </div>
`;

const projectCardInterface = `
  <div class="works-card-body">
      <h5 class="works-card-h5"></h5>
      <div>
          <ul class="works-card-list">
              <li class="works-card-list-item"></li>
              <li class="works-card-list-item"></li>
              <li class="works-card-list-item"></li>
              <li class="works-card-list-item"></li>
          </ul>
      </div>
      <div class="card-btn-wrapper">
          <a class="project-btn btn" href="#">See Project</a>
      </div>
  </div>
`;

const projectsData = [
  {
    id: 'proj01',
    name: [
      'Multi-Post Stories<br>Gain+Glory',
      'Keeping track of hundreds of components',
    ],
    description: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem
      Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    image: [
      'static/images/details-portfolio-873w.png',
      'static/images/details-portfolio-311w.png',
    ],
    technologies: [
      [
        'Ruby on rails',
        'css',
        'JavaScript',
        'html',
      ],
      [
        'Codekit',
        'GitHub',
        'Ruby on rails',
        'css',
        'JavaScript',
        'Bootstrap',
        'Terminal',
        'Codepen',
      ],
    ],
    live: 'https://sntakirutimana72.github.io/Portfolio-desktop-version/',
    source: 'https://github.com/sntakirutimana72/Portfolio-desktop-version',
  },
  {
    id: 'proj02',
    name: [
      'Multi-Post Stories<br>Gain+Glory',
      'Keeping track of hundreds of components',
    ],
    description: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem
      Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    image: [
      'static/images/details-portfolio-873w.png',
      'static/images/details-portfolio-311w.png',
    ],
    technologies: [
      [
        'Ruby on rails',
        'css',
        'JavaScript',
        'html',
      ],
      [
        'Codekit',
        'GitHub',
        'Ruby on rails',
        'css',
        'JavaScript',
        'Bootstrap',
        'Terminal',
        'Codepen',
      ],
    ],
    live: 'https://sntakirutimana72.github.io/Portfolio-desktop-version/',
    source: 'https://github.com/sntakirutimana72/Portfolio-desktop-version',
  },
  {
    id: 'proj03',
    name: [
      'Multi-Post Stories<br>Gain+Glory',
      'Keeping track of hundreds of components',
    ],
    description: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem
      Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    image: [
      'static/images/details-portfolio-873w.png',
      'static/images/details-portfolio-311w.png',
    ],
    technologies: [
      [
        'Ruby on rails',
        'css',
        'JavaScript',
        'html',
      ],
      [
        'Codekit',
        'GitHub',
        'Ruby on rails',
        'css',
        'JavaScript',
        'Bootstrap',
        'Terminal',
        'Codepen',
      ],
    ],
    live: 'https://sntakirutimana72.github.io/Portfolio-desktop-version/',
    source: 'https://github.com/sntakirutimana72/Portfolio-desktop-version',
  },
  {
    id: 'proj04',
    name: [
      'Multi-Post Stories<br>Gain+Glory',
      'Keeping track of hundreds of components',
    ],
    description: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem
      Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    image: [
      'static/images/details-portfolio-873w.png',
      'static/images/details-portfolio-311w.png',
    ],
    technologies: [
      [
        'Ruby on rails',
        'css',
        'JavaScript',
        'html',
      ],
      [
        'Codekit',
        'GitHub',
        'Ruby on rails',
        'css',
        'JavaScript',
        'Bootstrap',
        'Terminal',
        'Codepen',
      ],
    ],
    live: 'https://sntakirutimana72.github.io/Portfolio-desktop-version/',
    source: 'https://github.com/sntakirutimana72/Portfolio-desktop-version',
  },
  {
    id: 'proj05',
    name: [
      'Multi-Post Stories<br>Gain+Glory',
      'Keeping track of hundreds of components',
    ],
    description: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem
      Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    image: [
      'static/images/details-portfolio-873w.png',
      'static/images/details-portfolio-311w.png',
    ],
    technologies: [
      [
        'Ruby on rails',
        'css',
        'JavaScript',
        'html',
      ],
      [
        'Codekit',
        'GitHub',
        'Ruby on rails',
        'css',
        'JavaScript',
        'Bootstrap',
        'Terminal',
        'Codepen',
      ],
    ],
    live: 'https://sntakirutimana72.github.io/Portfolio-desktop-version/',
    source: 'https://github.com/sntakirutimana72/Portfolio-desktop-version',
  },
  {
    id: 'proj06',
    name: [
      'Multi-Post Stories<br>Gain+Glory',
      'Keeping track of hundreds of components',
    ],
    description: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem
      Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    image: [
      'static/images/details-portfolio-873w.png',
      'static/images/details-portfolio-311w.png',
    ],
    technologies: [
      [
        'Ruby on rails',
        'css',
        'JavaScript',
        'html',
      ],
      [
        'Codekit',
        'GitHub',
        'Ruby on rails',
        'css',
        'JavaScript',
        'Bootstrap',
        'Terminal',
        'Codepen',
      ],
    ],
    live: 'https://sntakirutimana72.github.io/Portfolio-desktop-version/',
    source: 'https://github.com/sntakirutimana72/Portfolio-desktop-version',
  },
];
