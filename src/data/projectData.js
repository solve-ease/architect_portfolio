// Project data for each architecture project
const projectData = [
  {
    id: 'cascade',
    title: 'Cascade',
    location: 'Faridabad, Haryana',
    // year: '2022',
    type: 'Branded Ultra-Luxury Mall',
    status: 'Competition Entry',
    area: '62,000 m²',
    description: `A Vertical River "The Cascade" is defined by its soft, terraced geometry. Moving away from rigid verticality, the building is conceived as a series of cascading floor plates that step down toward the street. This creates a natural, amphitheater-like effect, where each level offers a new vantage point over the bustling high-street below. The architecture mimics the movement of water over stone, replacing sharp corners with smooth, organic curves that guide the eye and the pedestrian flow.`,
    coverImage: '/assets/2.webp',
    images: [
      '/assets/2.webp',
      '/assets/14.webp',
      '/assets/26.webp',
    ],
    sections: [
      {
        type: 'TextRight',
        props: {
          text: `A Vertical River "The Cascade" is defined by its soft, terraced geometry. Moving away from rigid verticality, the building is conceived as a series of cascading floor plates that step down toward the street. This creates a natural, amphitheater-like effect, where each level offers a new vantage point over the bustling high-street below. The architecture mimics the movement of water over stone, replacing sharp corners with smooth, organic curves that guide the eye and the pedestrian flow.`,
        },
      },
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'Cascade' },
            { label: 'Typology', value: 'Branded Ultra-Luxury Mall' },
            { label: 'Location', value: 'Faridabad, Haryana' },
            { label: 'Program', value: 'High Street Retail' },
            { label: 'Status', value: 'Concept / Design Development' },
            { label: 'Area', value: '121,000 m²' },
            { label: 'Client', value: 'GPM Architects / RPS' },
          ],
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/14/1.webp',
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `The hallmark of the Cascade design is the integration of curved digital skins that follow the downward sweep of the facade.`,
        },
      },
      {
        type: "Slider",
        props: {
          heading: `Digital Fall: 
Media in 
Motion`,
          // text: 'From initial concept to refined design — a journey of exploration and iteration.',
          images: [
            '/assets/14/2.webp',
            '/assets/14/3.webp',
            '/assets/14/5.webp',
            '/assets/14/10.webp',
          ],
        }
      },
      {
        type: "ImageLeftTextRight",
        props: {
          src: '/assets/14/4.webp',
          alt: 'Cascade facade detail',
          heading: 'Media in\n Motion',
          text: `The hallmark of the Cascade design is the integration of curved digital skins that follow the downward sweep of the facade. These media surfaces are not static billboards but dynamic canvases that respond to the movement of pedestrians and vehicles below, creating a constantly evolving visual experience. The media skins are designed to be programmable, allowing for a wide range of content — from branded advertising to interactive art installations — that can be tailored to different times of day, events, or seasons. This creates a building that is not just a backdrop for commerce but an active participant in the urban life of the city.`,
        }
      },
      {
        type: "HeadingLeft",
        props: {
          heading: `The ground plane of The Cascade is a masterclass in porosity. By stepping the building back, the design creates deep, sun-drenched terraces on every level, populated with lush greenery and "floating" al-fresco dining pods.`
        }
      },
      {
        type: "ImageLeft",
        props: {
          src: '/assets/14/7.webp',
          alt: 'Cascade interior detail'
        }
      },
      {
        type: "Slider",
        props: {
          heading: `The Porous Promenade`,
          // text: 'From initial concept to refined design — a journey of exploration and iteration.',
          images: [
            '/assets/14/8.webp',
            '/assets/14/11.webp',
            '/assets/14/12.webp',
          ],
        }
      },
      {
        type: "HeadingRight",
        props: {
          heading:`The ground plane of The Cascade is a masterclass in porosity. By stepping the building back, the design creates deep, sun-drenched terraces on every level, populated with lush greenery and "floating" al-fresco dining pods.`
        }
      },
      {
        type: "ImageLeftTextRight",
        props: {
          src: '/assets/14/11.webp',
          alt: 'Cascade facade detail',
          heading: 'The Structural Vortex',
          text: `Connecting these cascading layers is a dramatic, lattice-work vortex—a central structural funnel that draws natural light into the heart of the lower levels. This sculptural centerpiece serves as a vertical anchor, around which the high-street retail revolves. The interior is a study in tactile luxury, utilizing warm metallic finishes and seamless glass to ensure that the transition from the outdoor promenade to the indoor boutiques is fluid and uninterrupted.`,
        }
      },
    ],
  },
  {
    id: 'arcadia',
    title: 'Arcadia',
    location: 'Faridabad, Haryana',
    // year: '2021',
    type: 'Branded Ultra-Luxury Mixed-Use',
    status: 'Concept / Design Development',
    area: '24,000 m²',
    description: `"The Arcadia" is a contemporary reinterpretation of the historic European shopping arcade, scaled for the future of the Indian metropolis. While the "Shards" concept focused on vertical tension, The Arcadia celebrates the rhythm of the arch. The façade is defined by a series of monumental, copper-toned portals that stretch across the building's length, creating a cinematic promenade that frames the commercial energy within.`,

    coverImage: '/assets/20.webp',
    images: [
      '/assets/20/1.webp',
      '/assets/20/2.webp',
      '/assets/20/3.webp',
      '/assets/20/4.webp',
      '/assets/20/5.webp',
      '/assets/20/6.webp',
    ],
    sections: [
      {
        type: 'TextRight',
        props: {
          // heading: 'The Arcadia',
          text: `"The Arcadia" is a contemporary reinterpretation of the historic European shopping arcade, scaled for the future of the Indian metropolis. While the "Shards" concept focused on vertical tension, The Arcadia celebrates the rhythm of the arch. The façade is defined by a series of monumental, copper-toned portals that stretch across the building's length, creating a cinematic promenade that frames the commercial energy within.`,
        },
      },
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'Arcadia' },
            { label: 'Type', value: 'Branded Ultra-Luxury Mixed-Use' },
            { label: 'Location', value: 'Faridabad, Haryana' },
            // { label: 'Year', value: '2021' },
            { label: 'Status', value: 'Concept / Design Development' },
            { label: 'Area', value: '24,000 m²' },
          ],
        },
      },
      {
        type: "ImageCentre",
        props: {
          src: '/assets/20/1.webp',
          alt: 'Arcadia exterior',
          // caption: 'Exterior view — design development',
        }
      },
      {
        type: "HeadingLeft",
        props: {
          subtext: 'The Portal Façade: Luxury as a Frame',
          heading: 'The architectural signature of The Arcadia lies in its repetitive, high-arched geometry. These are not merely windows, but monumental frames for global luxury.',
        }
      },
      {
        type: "ImageLeftTextRight",
        props: {
          src: '/assets/20/2.webp',
          alt: 'Arcadia facade detail',
          heading: 'A Porous Urban Ballroom',
          text: `At the ground level, the design functions as a porous extension of the city. The arches create a sheltered, rhythmic walkway that protects pedestrians while maintaining a constant visual connection to the vibrant interior. The transition from the street to the atrium is grand and seamless, leading visitors toward the central light-filled dome and tiered internal promenades. It is a design that prioritizes "grace over speed," inviting the city into a sophisticated, climate-responsive sanctuary.`,
        }
      },
      {
        type: "ImageCentre",
        props: {
          src: '/assets/20.webp',
          alt: 'Arcadia interior',
        }
      },
      {
        type: "Slider",
        props: {
          heading: "The Architectural Soul",
          images: [
            '/assets/20/4.webp',
            '/assets/20/5.webp',
            '/assets/20/6.webp',
          ]
        }
      },
      {
        type: "HeadingLeft",
        props: {
          heading: 'The palette of The Arcadia is a sophisticated dialogue between warm architectural bronzes, high-performance glass, and polished stone. Unlike the digital-heavy "Shards," this option leans into the tactile and the timeless.',
        }
      },
      {
        type: "ImageRight",
        props: {
          src: '/assets/20/3.webp',
          alt: 'Arcadia interior',
        }
      },
    ],
  },
  {
    id: 'the-kinetic-ribbon',
    title: 'The Kinetic Ribbon',
    location: 'Faridabad, Haryana',
    type: 'Branded Ultra-Luxury Mixed-Use Development',
    status: 'Competition Entry',
    area: '48,000 m²',
    description: `The Kinetic Ribbon is a study in perpetual motion captured in built form. Conceived as a continuous flowing surface that wraps, folds, and cantilevers across the site, the design reimagines the high-street mall as a dynamic, sculptural landscape. Unlike conventional retail blocks, this project embraces fluidity—creating a building that appears to twist and unravel as it rises, offering multiple perspectives and experiences from every vantage point.`,

    coverImage: '/assets/18/1.webp',
    images: [
      '/assets/18/1.webp',
      '/assets/18/2.webp',
      '/assets/18/3.webp',
      '/assets/18/4.webp',
      '/assets/18/5.webp',
      '/assets/18/6.webp',
      '/assets/18/7.webp',
      '/assets/18/8.webp',
      '/assets/18/9.webp',
    ],
    sections: [
      {
        type: 'TextRight',
        props: {
          text: `The Kinetic Ribbon is a study in perpetual motion captured in built form. Conceived as a continuous flowing surface that wraps, folds, and cantilevers across the site, the design reimagines the high-street mall as a dynamic, sculptural landscape. Unlike conventional retail blocks, this project embraces fluidity—creating a building that appears to twist and unravel as it rises, offering multiple perspectives and experiences from every vantage point.`,
        },
      },
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'The Kinetic Ribbon' },
            { label: 'Typology', value: 'Branded Ultra-Luxury Mixed-Use' },
            { label: 'Location', value: 'Faridabad, Haryana' },
            { label: 'Program', value: 'High Street Retail + Hospitality' },
            { label: 'Status', value: 'Competition Entry / Design Development' },
            { label: 'Area', value: '48,000 m²' },
            { label: 'Client', value: 'GPM Architects / RPS' },
          ],
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/18/2.webp',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          subtext: 'The Flowing Facade',
          heading: `The defining gesture of The Kinetic Ribbon is its continuous, ribbon-like facade that wraps the entire building in a seamless sculptural envelope.`,
        },
      },
      {
        type: "ImageLeftTextRight",
        props: {
          src: '/assets/18/3.webp',
          alt: 'The Kinetic Ribbon facade detail',
          heading: 'Motion in\n Stillness',
          text: `The defining gesture of The Kinetic Ribbon is its continuous, ribbon-like facade that wraps the entire building in a seamless sculptural envelope. This flowing surface creates dramatic cantilevers and overhangs that provide natural shading while establishing a powerful street presence. The ribbon's twisting geometry generates a series of double-height voids and terraces, each offering curated views of the urban context below. The result is a building that feels alive—constantly changing depending on the viewer's position and the time of day.`,
        }
      },
      {
        type: "Slider",
        props: {
          heading: `Perspectives
in Motion`,
          images: [
            '/assets/18/4.webp',
            '/assets/18/5.webp',
            '/assets/18/6.webp',
          ],
        }
      },
      {
        type: "HeadingRight",
        props: {
          heading: `The Kinetic Ribbon is designed as a series of interconnected retail promenades that spiral upward through the building, blurring the boundary between interior and exterior.`
        }
      },
      {
        type: "ImageRight",
        props: {
          src: '/assets/18/7.webp',
          alt: 'The Kinetic Ribbon interior promenade'
        }
      },
      {
        type: "ImageLeftTextRight",
        props: {
          src: '/assets/18/8.webp',
          alt: 'The Kinetic Ribbon circulation',
          heading: 'The Vertical Promenade',
          text: `The Kinetic Ribbon is designed as a series of interconnected retail promenades that spiral upward through the building, blurring the boundary between interior and exterior. Wide, landscaped terraces punctuate each level, creating opportunities for outdoor dining, pop-up events, and brand activations. The circulation is choreographed to feel effortless—gently sloping ramps and sculptural staircases guide visitors through a carefully curated journey of luxury retail, hospitality, and experiential zones.`,
        }
      },
      {
        type: "HeadingLeft",
        props: {
          heading: 'The material palette celebrates contrast: smooth white surfaces meet warm timber accents, while expansive glazing ensures transparency and visual connectivity throughout.',
        }
      },
      {
        type: "ImageCentre",
        props: {
          src: '/assets/18/9.webp',
          alt: 'The Kinetic Ribbon materiality',
        }
      },
      {
        type: "HeadingRight",
        props: {
          heading: `At night, integrated LED lighting traces the ribbon's curves, transforming the building into a glowing beacon—a kinetic sculpture that animates the cityscape and announces a new era of architectural expression in the region.`
        }
      },
    ],
  },
];

// Map from imageKey to projectId — covers both new img1…img32 keys (current home page)
// Images are distributed across projects in round-robin order (12 projects × ~3 images each)
export const imageKeyToProject = {
  // ── New home page image keys (img1–img32) ──────────────────────────────
  img1:  'conventional-center',
  img2:  'evolo',
  img3:  'gpm-retail',
  img4:  'm3m',
  img5:  'migsun-lucknow',
  img6:  'migsun-mixed-use',
  img7:  'migsun-rohini',
  img8:  'noida-one',
  img9:  'omaxe-mall',
  img10: 'pentagon',
  img11: 'rsp',
  img12: 'the-white-house',
  img13: 'conventional-center',
  img14: 'cascade',
  img15: 'gpm-retail',
  img16: 'm3m',
  img17: 'migsun-lucknow',
  img18: 'the-kinetic-ribbon',
  img19: 'migsun-rohini',
  img20: 'arcadia',
  img21: 'omaxe-mall',
  img22: 'pentagon',
  img23: 'rsp',
  img24: 'the-white-house',
  img25: 'conventional-center',
  img26: 'evolo',
  img27: 'gpm-retail',
  img28: 'm3m',
  img29: 'migsun-lucknow',
  img30: 'migsun-mixed-use',
  img31: 'migsun-rohini',
  img32: 'noida-one',
};

export default projectData;
