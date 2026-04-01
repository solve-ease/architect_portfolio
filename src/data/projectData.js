// Project data for each architecture project
const projectData = [
  {
    id: 'urban-square',
    title: 'Urban Square',
    location: 'Hindaun City, Rajasthan',
    type: 'Retail',
    status: 'Concept / Design Development',
    area: '300 Sq.mt',
    description: `Project Overview This landmark retail development, located on a prominent corner plot in a Tier 3 city, represents a deliberate effort to synthesize modern architectural form with deep-rooted cultural heritage. Far from being a standard, placeless commercial structure, the project serves as a contextual catalyst, proving that high-end design can be meaningfully localized.`,
    coverImage: '/assets/32.webp',
    images: [
      '/assets/32/1.webp',
      '/assets/32/2.webp',
      '/assets/32/3.webp',
      '/assets/32/4.webp',
      '/assets/32/5.webp'
    ],
    sections: [
      {
        type: 'TextRight',
        props: {
          text: `Project Overview This landmark retail development, located on a prominent corner plot in a Tier 3 city, represents a deliberate effort to synthesize modern architectural form with deep-rooted cultural heritage. Far from being a standard, placeless commercial structure, the project serves as a contextual catalyst, proving that high-end design can be meaningfully localized.`,
        },
      },
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Location', value: 'Hindaun City, Rajasthan' },
            { label: 'Site Area', value: '300 Sq.mt' },
            { label: 'Typology', value: 'Retail' },
            { label: 'Client', value: 'Undisclosed' },
            { label: 'Status', value: 'Concept / Design Development' },
          ],
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/32/1.webp',
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `The project's architectural expression is defined by its dramatic, curvilinear massing and organic verticality, culminating in a distinctive tapered form that creates a new urban silhouette.`,
        },
      },
      {
        type: "Slider",
        props: {
          heading: `Facade Design`,
          images: [
            '/assets/32/2.webp',
            '/assets/32/3.webp',
          ],
        }
      },
      {
        type: "ImageLeftTextRight",
        props: {
          src: '/assets/32/4.webp',
          alt: 'Urban Square facade',
          heading: 'Contextual\n Catalyst',
          text: `Central to the project's identity is the intricate, parametrically designed perforated facade screen. Rather than an arbitrary geometric pattern, this complex lattice is carefully derived from traditional textile and building motifs native to the region. This screen acts as a porous, textured 'second skin' that balances current modernism with a historic narrative. This skin serves crucial passive roles, providing vital solar shading and privacy while creating a dynamic and ever-shifting dialogue of dappled light and shadow across the interior spaces and streetscape.`,
        }
      },
      {
        type: "HeadingLeft",
        props: {
          heading: `At the ground plane, the building’s base is expressed as a fully transparent, double-height glazed podium. This light and inviting retail plinth acts as an active urban catalyst, allowing interior retail activity to dissolve into the streetscape.`
        }
      },
      {
        type: "ImageLeft",
        props: {
          src: '/assets/32/5.webp',
          alt: 'Urban Square ground level'
        }
      },
      {
        type: 'TextRight',
        props: {
          text: `The transparency of this new 'active edge' creates a deliberate and respectful contrast with the heavier, traditional stone and masonry architecture that characterizes the surrounding area, establishing a sophisticated dialogue between new and old. The building is designed for diurnal transformation. By day, the patterned screen absorbs and modulates daylight; by night, the interior is illuminated, causing the building to emit a soft, localized glow that activates the neighborhood and showcases the detailed pattern from a distance. The Contextual Lattice Hub is a powerful intervention that celebrates its location, offering a premium, heritage-driven experience for the modern consumer.`
        }
      }
    ],
  },
  {
    id: 'urban-renaissance',
    title: 'Urban Renaissance',
    location: 'Canary Wharf, London',
    type: 'Urban Planning',
    status: 'Concept / Design Development',
    area: '10 Acres',
    description: `Urban Renaissance explores the pressing issue of urban cores dominated by vacant office buildings, exemplified by trends in cities such as London. Previously bustling business districts, like Canary Wharf, are facing challenges as these structures are vacated, posing environmental concerns with 32% of construction waste ending up in landfills. Urban Renaissance embraces this issue as an opportunity to redefine vacant districts by transforming them into vibrant, mixed-use urbanscapes.`,
    coverImage: '/assets/1.webp',
    images: [
      '/assets/1/1.webp',
      '/assets/1/2.webp',
      '/assets/1/3.webp',
      '/assets/1/4.webp',
      '/assets/1/5.webp'
    ],
    sections: [
      {
        type: 'TextRight',
        props: {
          text: `Urban Renaissance explores the pressing issue of urban cores dominated by vacant office buildings, exemplified by trends in cities such as London. Previously bustling business districts, like Canary Wharf, are facing challenges as these structures are vacated, posing environmental concerns with 32% of construction waste ending up in landfills. Urban Renaissance embraces this issue as an opportunity to redefine vacant districts by transforming them into vibrant, mixed-use urbanscapes.`,
        },
      },
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Location', value: 'Canary Wharf, London' },
            { label: 'Site Area', value: '10 Acres' },
            { label: 'Typology', value: 'Urban Planning' },
            { label: 'Program', value: 'Urban Planning' },
            { label: 'Studio', value: 'Shajay Bhooshan' },
            { label: 'Tutors', value: 'Henry Louth, Keerti Manney' },
            { label: 'Team', value: 'Chaitanya Goyal, Ullas Murugesh Rao, Janvi Rashesh Paun, Meghana Srinivasa Rao' },
            { label: 'Status', value: 'Concept / Design Development' },
          ],
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/1/1.webp',
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `Our proposal centres around a multimodal approach, a departure from the conventional focus on offices. Our design introduces dynamic transformations over time, ensuring adaptability to changing urban demands.`,
        },
      },
      {
        type: "Slider",
        props: {
          heading: `Adaptive Urbanism`,
          images: [
            '/assets/1/2.webp',
            '/assets/1/3.webp',
          ],
        }
      },
      {
        type: "ImageLeftTextRight",
        props: {
          src: '/assets/1/4.webp',
          alt: 'Urban Renaissance details',
          heading: '4-Stakeholder\n Model',
          text: `Key to this is a unique 4-stakeholder representative model, involving: residential, office, commercial, and city co-operatives. Unlike conventional urban planning, the proposed system holistically engages stakeholders using a simulation-driven approach. The inclusion of two dimensions of verticality and time in the existing land-value simulations add precision to decision-making. Verticality introduces accuracy in simulating land value based on spatial decisions, while time represents programmatic changes within the urban fabric making a 4-dimensional land value simulation. Using a 4D simulation allows the process of decision-making to pass through multiple trial and error processes.`,
        }
      },
      {
        type: "HeadingLeft",
        props: {
          heading: `One significant challenge identified involves the arrangement of stacked deeper floorplates. Carving the floorplates diagonally enabled us to introduce natural light, foster visual connectivity, and facilitate circulation between diverse functions. The emphasis on interior urbanism enables harnessing natural light effectively for various programs.`
        }
      },
      {
        type: "ImageLeft",
        props: {
          src: '/assets/1/5.webp',
          alt: 'Urban Renaissance interior'
        }
      },
      {
        type: 'TextRight',
        props: {
          text: `Urban Renaissance introduces tiles replacing clusters of voxels, creating versatile residential and commercial spaces, enhancing the adaptability and flexibility of interior urban environments. This thesis is potentially a globally applicable urban simulation system tailored for structures featuring deep floorplates as a blueprint. At its core, our simulation model maintains a consistent structural framework, allowing for the interchangeability of interiors in direct response to the dynamic requirements of diverse urban programs.`
        }
      }
    ],
  },
  {
    id: 'cascade',
    title: 'Cascade',
    location: 'Faridabad, Haryana',
    // year: '2022',
    type: 'Branded Ultra-Luxury Mall',
    status: 'Competition Entry',
    area: '62,000 m²',
    description: `A Vertical River "The Cascade" is defined by its soft, terraced geometry. Moving away from rigid verticality, the building is conceived as a series of cascading floor plates that step down toward the street. This creates a natural, amphitheater-like effect, where each level offers a new vantage point over the bustling high-street below. The architecture mimics the movement of water over stone, replacing sharp corners with smooth, organic curves that guide the eye and the pedestrian flow.`,
    coverImage: '/assets/14.webp',
    images: [
      '/assets/home/14.webp',
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
          src: '/assets/home/14/1.webp',
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
    description: `"The Arcadia" is a contemporary reinterpretation of the historic European shopping arcade, scaled for the future of the Indian metropolis. While the "Shards" concept focused on vertical tension, The Arcadia celebrates the rhythm of the arch. The facade is defined by a series of monumental, copper-toned portals that stretch across the building's length, creating a cinematic promenade that frames the commercial energy within.`,

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
          text: `"The Arcadia" is a contemporary reinterpretation of the historic European shopping arcade, scaled for the future of the Indian metropolis. While the "Shards" concept focused on vertical tension, The Arcadia celebrates the rhythm of the arch. The facade is defined by a series of monumental, copper-toned portals that stretch across the building's length, creating a cinematic promenade that frames the commercial energy within.`,
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
          subtext: 'The Portal Facade: Luxury as a Frame',
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

    coverImage: '/assets/18.webp',
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

  {
    id: 'the-studio',
    title: 'The Studio',
    location: 'Noida, UP',
    type: 'Interior Design',
    status: 'Under Construction',
    area: '5,000 Sq.ft',
    description: `This expansive, multi-functional 5000-square-foot facility in Noida is designed to be the ultimate creative playground for a premier technology YouTuber. The design philosophy moves completely away from the outdated 'slap a logo on the wall' approach. Instead, the studio environment embodies the brand's DNA—precision, warmth, and innovation—through a curated balance of color, light, and functional form.`,

    coverImage: '/assets/13.webp',
    images: [
      '/assets/13/1.webp',
      '/assets/13/2.webp',
      '/assets/13/3.webp',
      '/assets/13/4.webp',
      '/assets/13/5.webp',
      '/assets/13/6.webp',
      '/assets/13/7.webp',
      '/assets/13/8.webp',
      '/assets/13/9.webp',
      '/assets/13/10.webp',
      '/assets/13/11.webp',
      '/assets/13/12.webp',
      '/assets/13/13.webp',
      '/assets/13/14.webp',
      '/assets/13/15.webp',
    ],
    sections: [
      {
        type: 'TextRight',
        props: {
          text: `This expansive, multi-functional 5000-square-foot facility in Noida is designed to be the ultimate creative playground for a premier technology YouTuber. The design philosophy moves completely away from the outdated 'slap a logo on the wall' approach. Instead, the studio environment embodies the brand's DNA—precision, warmth, and innovation—through a curated balance of color, light, and functional form.`,
        },
      },
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'The Studio' },
            { label: 'Typology', value: 'Interior Design' },
            { label: 'Location', value: 'Noida, UP' },
            { label: 'Site Area', value: '5,000 Sq.ft' },
            { label: 'Client', value: 'Undisclosed' },
            { label: 'Status', value: 'Under Construction' },
          ],
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/13/3.webp',
          alt: 'The Studio entrance',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          subtext: 'The Color Strategy',
          heading: 'Bold but calculated. Every decision is rooted in psychological impact and functional clarity.',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/13/4.webp',
          alt: 'The Studio interior design',
          heading: 'The Neutral Canvas',
          text: `The dominant palette is composed of warm grays, soft whites, and muted browns—tones that evoke professionalism and focus. These neutrals serve as the visual foundation, ensuring that the space feels expansive, sophisticated, and camera-ready at all times. In a studio where lighting conditions must be meticulously controlled, this neutral base prevents color contamination in footage and allows for dynamic background shifts during shoots.`,
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `Strategic pops of brand color—specifically TechWiser's signature orange—are introduced only in deliberate, high-impact moments. These accents appear as furniture highlights, integrated LED strips, or small architectural details that catch the eye without overwhelming the senses.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/13/5.webp',
          alt: 'Brand color accents',
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'The Gallery Entrance & Gear Showcase',
          images: [
            '/assets/13/6.webp',
            '/assets/13/7.webp',
            '/assets/13/8.webp',
          ],
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/13/9.webp',
          alt: 'Production suite',
          heading: 'Production & Editing Suites',
          text: `The heart of the studio is its production floor—an adaptable, modular zone designed to accommodate everything from tech reviews to sit-down interviews. Neutral-toned acoustic panels line the walls, engineered not only for sound absorption but also to create visual texture without distraction. Recessed lighting and adjustable RGB systems allow for total control over mood and tone, crucial for maintaining TechWiser's signature cinematic quality.`,
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'Adjacent to the production area is the editing suite—a focused, ergonomic workstation designed for long creative sessions. Custom-built desks in warm oak contrast against dark gray walls, creating a cocoon-like environment that minimizes external distraction.',
        },
      },
      {
        type: 'ImageRight',
        props: {
          src: '/assets/13/10.webp',
          alt: 'Editing suite workspace',
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/13/11.webp',
          alt: 'Collaborative hub',
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `The Collaborative Hub is designed as a flexible meeting and brainstorming zone. Modular furniture allows for quick reconfigurations, while integrated screens and whiteboards support creative workflows.`,
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'Spaces in Detail',
          images: [
            '/assets/13/12.webp',
            '/assets/13/13.webp',
            '/assets/13/14.webp',
          ],
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'Biophilic elements—indoor plants, natural wood finishes, and ample natural light—are woven throughout the design, softening the tech-heavy environment and creating a space that feels as welcoming as it is productive.',
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/13/15.webp',
          alt: 'Natural elements and finishes',
        },
      },
    ],
  },

  {
    id: 'the-human-high-street',
    title: 'The Human High Street',
    location: 'Greater Noida, Uttar Pradesh',
    type: 'High-Street Retail + Serviced Apartments',
    status: 'Concept / Design Development',
    area: '3 Acres',
    description: `The Human High Street redefines the conventional high-street retail experience by creating a layered canopy that shelters pedestrians while inviting natural light and air to flow freely. The design is a direct response to the harsh climate of North India, where the summer sun can be unforgiving and the monsoon rains relentless. By stepping the building envelope back at each level, the architecture creates a series of shaded terraces that serve as both public promenades and private balconies for the studio apartments above.`,

    coverImage: '/assets/11.webp',
    images: [
      '/assets/11/1.webp',
      '/assets/11/2.webp',
      '/assets/11/3.webp',
      '/assets/11/4.webp',
      '/assets/11/5.webp',
    ],
    sections: [
      {
        type: 'TextRight',
        props: {
          text: `The Human High Street redefines the conventional high-street retail experience by creating a layered canopy that shelters pedestrians while inviting natural light and air to flow freely. The design is a direct response to the harsh climate of North India, where the summer sun can be unforgiving and the monsoon rains relentless. By stepping the building envelope back at each level, the architecture creates a series of shaded terraces that serve as both public promenades and private balconies for the studio apartments above.`,
        },
      },
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'The Human High Street' },
            { label: 'Typology', value: 'High-Street Retail + Serviced Apartments' },
            { label: 'Location', value: 'Greater Noida, Uttar Pradesh' },
            { label: 'Program', value: '3 Floors Retail + 3 Floors Studio Apartments' },
            { label: 'Status', value: 'Concept / Design Development' },
            { label: 'Site Area', value: '3 Acres' },
            { label: 'Client', value: 'Migsun Group' },
          ],
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/11/2.webp',
          alt: 'The Human High Street exterior view',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          subtext: 'The Layered Canopy',
          heading: 'A climate-responsive architecture that prioritizes human comfort and pedestrian experience above all else.',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/11/3.webp',
          alt: 'The Human High Street facade detail',
          heading: 'Sheltered Promenades',
          text: `At the ground level, the design creates a deeply recessed arcade that runs the entire length of the building, providing a comfortable, climate-controlled environment for shoppers and diners. The overhang extends far beyond the facade, ensuring that even during peak monsoon, pedestrians remain dry. Above, each residential level steps back progressively, creating a cascading profile that maximizes natural ventilation while minimizing heat gain. The result is a building that breathes with the city, rather than fighting against it.`,
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `The facade is composed of simple, modular elements—white concrete fins, glass panels, and metal screens—that create a dynamic interplay of light and shadow throughout the day.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/11/4.webp',
          alt: 'The Human High Street material palette',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'The Human High Street is not about spectacle or statement-making. It is about creating a dignified, livable environment that respects both the user and the urban fabric. It is architecture rooted in empathy, designed not for the camera, but for the everyday life of the city.',
        },
      },
      {
        type: 'ImageRight',
        props: {
          src: '/assets/11/5.webp',
          alt: 'The Human High Street urban context',
        },
      },
    ],
  },

  {
    id: 'shards',
    title: 'Shards',
    location: 'Faridabad, Haryana',
    type: 'Branded Ultra-Luxury Mall',
    status: 'Competition Entry / Design Development',
    area: '3 Acres',
    description: `Shards is unapologetically bold. Born from a desire to break free from the monotony of conventional retail architecture, this design embraces verticality, tension, and drama. The building is conceived as a cluster of sharp, crystalline forms that rise and fracture across the site, each shard angled to catch light and create dynamic shadows throughout the day. The result is a structure that feels alive, constantly shifting in appearance as the sun moves across the sky.`,

    coverImage: '/assets/3.webp',
    images: [
      '/assets/3/1.webp',
      '/assets/3/2.webp',
      '/assets/3/3.webp',
      '/assets/3/4.webp',
      '/assets/3/5.webp',
      '/assets/3/6.webp',
    ],
    sections: [
      {
        type: 'TextRight',
        props: {
          text: `Shards is unapologetically bold. Born from a desire to break free from the monotony of conventional retail architecture, this design embraces verticality, tension, and drama. The building is conceived as a cluster of sharp, crystalline forms that rise and fracture across the site, each shard angled to catch light and create dynamic shadows throughout the day. The result is a structure that feels alive, constantly shifting in appearance as the sun moves across the sky.`,
        },
      },
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'Shards' },
            { label: 'Typology', value: 'Branded Ultra-Luxury Mall' },
            { label: 'Location', value: 'Faridabad, Haryana' },
            { label: 'Program', value: 'High Street Retail' },
            { label: 'Status', value: 'Competition Entry / Design Development' },
            { label: 'Site Area', value: '3 Acres' },
            { label: 'Client', value: 'GPM Architects / RPS' },
          ],
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/3/2.webp',
          alt: 'Shards exterior view',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          subtext: 'The Vertical Statement',
          heading: 'Unlike the soft, cascading forms of other options, Shards celebrates sharp geometries and bold materiality.',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/3/3.webp',
          alt: 'Shards facade detail',
          heading: 'Crystalline Architecture',
          text: `The facade is composed of towering glass-and-metal panels that intersect at dramatic angles, creating a sense of upward momentum. Each shard is clad in high-performance glass—some transparent, some reflective, some translucent—allowing the building to shimmer and change character depending on the viewing angle and time of day. At night, integrated LED lighting traces the sharp edges, transforming the structure into a glowing beacon visible from kilometers away.`,
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `The design is not just about visual impact—it is also rooted in functional logic. The fragmented form creates multiple vertical atriums that draw natural light deep into the building.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/3/4.webp',
          alt: 'Shards interior atrium',
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'Light and Shadow',
          images: [
            '/assets/3/5.webp',
            '/assets/3/6.webp',
            // '/assets/3/1.webp',
          ],
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'The ground plane is activated by deep cuts and voids that create sheltered outdoor plazas, each framed by the towering shards above. These spaces serve as gathering points, event zones, and brandedActivation areas—outdoor rooms that blur the line between street and mall.',
        },
      },
      {
        type: 'ImageRight',
        props: {
          src: '/assets/3/2.webp',
          alt: 'Shards public plaza',
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `Shards is architecture as spectacle. It is designed to be photographed, shared, and celebrated—a landmark that announces its presence with confidence and refuses to blend into the background. This is luxury retail for the Instagram age, where the building itself becomes part of the brand experience.`,
        },
      },
    ],
  },

  {
    id: 'm3m-jacob-and-co',
    title: 'M3M JACOB & Co.',
    location: 'Gurgaon, Haryana',
    type: 'Luxury Watch Boutique',
    status: 'Concept / Design Development',
    area: '800 Sq.ft',
    description: `This is not just a watch boutique—it is a spatial celebration of precision, craftsmanship, and exclusivity. Designed for JACOB & Co., one of the world's most prestigious watchmakers, this 800-square-foot space in M3M Gurgaon reimagines the luxury retail experience as a curated journey through light, material, and form. Every element is meticulously crafted to reflect the DNA of the brand: bold, unapologetic, and timelessly elegant.`,

    coverImage: '/assets/19.webp',
    images: [
      '/assets/19/1.webp',
      '/assets/19/2.webp',
      '/assets/19/3.webp',
      '/assets/19/4.webp',
      '/assets/19/5.webp',
      '/assets/19/6.webp',
      '/assets/19/7.webp',
      '/assets/19/8.webp',
      '/assets/19/9.webp',
      '/assets/19/10.webp',
      '/assets/19/11.webp',
      '/assets/19/12.webp',
      '/assets/19/13.webp',
      '/assets/19/14.webp',
      '/assets/19/15.webp',
      '/assets/19/16.webp',
      '/assets/19/17.webp',
      '/assets/19/18.webp',
      '/assets/19/19.webp',
      '/assets/19/20.webp',
      '/assets/19/21.webp',
      '/assets/19/22.webp',
      '/assets/19/23.webp',
      '/assets/19/24.webp',
      '/assets/19/25.webp',
      '/assets/19/26.webp',
    ],
    sections: [
      {
        type: 'TextRight',
        props: {
          text: `This is not just a watch boutique—it is a spatial celebration of precision, craftsmanship, and exclusivity. Designed for JACOB & Co., one of the world's most prestigious watchmakers, this 800-square-foot space in M3M Gurgaon reimagines the luxury retail experience as a curated journey through light, material, and form. Every element is meticulously crafted to reflect the DNA of the brand: bold, unapologetic, and timelessly elegant.`,
        },
      },
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'M3M JACOB & Co.' },
            { label: 'Typology', value: 'Luxury Watch Boutique' },
            { label: 'Location', value: 'Gurgaon, Haryana' },
            { label: 'Area', value: '800 Sq.ft' },
            { label: 'Client', value: 'M3M India / JACOB & Co.' },
            { label: 'Status', value: 'Concept / Design Development' },
          ],
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/19/2.webp',
          alt: 'M3M JACOB & Co. entrance',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          subtext: 'The Material Language',
          heading: 'A palette of deep blacks, warm golds, and polished metals establishes an atmosphere of restrained opulence.',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/19/3.webp',
          alt: 'M3M JACOB & Co. interior detail',
          heading: 'Precision in Form',
          text: `The boutique is defined by clean geometric lines and a refined material palette that speaks to the precision of horology itself. Rich black marble floors anchor the space, while custom-built display cases in brushed brass and tempered glass create intimate viewing moments for each timepiece. The ceiling is treated as a sculptural element—integrated lighting strips and recessed panels create a sense of depth and drama, guiding the eye through the space with deliberate intention.`,
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'The Display Architecture',
          images: [
            '/assets/19/4.webp',
            '/assets/19/5.webp',
            '/assets/19/6.webp',
          ],
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `Each watch is presented as a work of art. Custom-designed display pedestals feature integrated LED backlighting, ensuring that every timepiece is illuminated with museum-quality precision.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/19/7.webp',
          alt: 'M3M JACOB & Co. display details',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/19/8.webp',
          alt: 'M3M JACOB & Co. viewing area',
          heading: 'The Private Viewing Experience',
          text: `At the heart of the boutique is a dedicated consultation zone—an intimate enclave where clients can experience the watches in a private, focused environment. Plush seating in rich leather, paired with a low marble table, creates a setting that feels more like a private collectors lounge than a retail space. This is where transactions become experiences, and browsing becomes curation.`,
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'Materiality & Craft',
          images: [
            '/assets/19/9.webp',
            // '/assets/19/10.webp',
            '/assets/19/11.webp',
            '/assets/19/12.webp',
          ],
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'The lighting strategy is critical. A layered approach combines ambient cove lighting, focused spotlights on key displays, and subtle accent lighting that highlights textures and materials without overwhelming the space.',
        },
      },
      {
        type: 'ImageRight',
        props: {
          src: '/assets/19/13.webp',
          alt: 'M3M JACOB & Co. lighting detail',
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/19/14.webp',
          alt: 'M3M JACOB & Co. central space',
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'Details & Finishes',
          images: [
            '/assets/19/15.webp',
            '/assets/19/16.webp',
            '/assets/19/17.webp',
            '/assets/19/18.webp',
          ],
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `The walls are clad in dark wood veneer with subtle grain patterns, providing a warm contrast to the cool metallic tones of the displays. Every joint, every edge, every surface is treated with the same level of precision that defines the watches themselves.`,
        },
      },
      {
        type: 'ImageLeft',
        props: {
          src: '/assets/19/19.webp',
          alt: 'M3M JACOB & Co. wall detail',
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'Spatial Journey',
          images: [
            '/assets/19/20.webp',
            '/assets/19/21.webp',
            '/assets/19/22.webp',
            '/assets/19/23.webp',
          ],
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'The boutique unfolds as a carefully choreographed sequence of moments—from the dramatic entrance to the intimate consultation zone, each space reveals itself progressively, inviting exploration and discovery.',
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/19/24.webp',
          alt: 'M3M JACOB & Co. overall view',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/19/25.webp',
          alt: 'M3M JACOB & Co. final perspective',
          heading: 'A Temple of Time',
          text: `This boutique is more than a retail space—it is a temple of time, where each watch is honored as a masterpiece of mechanical artistry. The design does not shout; it whispers. It does not compete with the product; it elevates it. In a world of over-designed retail environments, this space stands apart through restraint, refinement, and an unwavering commitment to craft.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/19/26.webp',
          alt: 'M3M JACOB & Co. signature view',
        },
      },
    ],
  },

  {
    id: 'the-wave',
    title: 'THE Wave',
    location: 'Lucknow, Uttar Pradesh',
    type: 'High-Street Retail + Serviced Apartments',
    status: 'Concept / Design Development',
    area: '4 Acres',
    description: `THE Wave is a celebration of fluid dynamics frozen in architecture. Defined by its seamless continuity of form, the design reimagines the traditional high-street retail and residential tower typology through a language of curves, rhythm, and flow. The building does not sit static on its site—it moves, undulates, and breathes, creating a visual spectacle that feels as much like a sculpture as it does a piece of functional architecture.`,

    coverImage: '/assets/7.webp',
    images: [
      '/assets/7/1.webp',
      '/assets/7/2.webp',
      '/assets/7/3.webp',
      '/assets/7/4.webp',
      '/assets/7/5.webp',
    ],
    sections: [
      {
        type: 'TextRight',
        props: {
          text: `THE Wave is a celebration of fluid dynamics frozen in architecture. Defined by its seamless continuity of form, the design reimagines the traditional high-street retail and residential tower typology through a language of curves, rhythm, and flow. The building does not sit static on its site—it moves, undulates, and breathes, creating a visual spectacle that feels as much like a sculpture as it does a piece of functional architecture.`,
        },
      },
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'THE Wave' },
            { label: 'Typology', value: 'High-Street Retail + Serviced Apartments' },
            { label: 'Location', value: 'Lucknow, Uttar Pradesh' },
            { label: 'Program', value: '4 Floors Retail + 30 Floors Studio Apartments' },
            { label: 'Status', value: 'Concept / Design Development' },
            { label: 'Site Area', value: '4 Acres' },
            { label: 'Client', value: 'Migsun Group' },
          ],
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/7/2.webp',
          alt: 'THE Wave exterior view',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          subtext: 'The Undulating Facade',
          heading: 'A facade that curves and flows with deliberate intention, creating a visual rhythm that runs across the building is height and length.',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/7/3.webp',
          alt: 'THE Wave facade detail',
          heading: 'Rhythm in Motion',
          text: `The defining gesture of THE Wave is its undulating facade—a continuous surface that curves and flows with deliberate intention, creating a visual rhythm that runs across the building is height and length. Unlike conventional towers that prioritize verticality, THE Wave balances horizontal and vertical movement. The horizontal lines, expressed through elongated balconies and cantilevered floor plates, create a sense of forward momentum, as if the building is perpetually in motion.`,
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `The facade is not just sculptural—it is performative. By stepping and curving the building envelope, THE Wave creates deep, shaded balconies and overhangs that provide natural climate control.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/7/4.webp',
          alt: 'THE Wave climate responsive design',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'In the harsh Lucknow summers, these passive design strategies are critical, ensuring that residents remain comfortable. The building breathes—allowing natural ventilation creating a living, responsive architecture rather than a sealed glass box.',
        },
      },
      {
        type: 'ImageRight',
        props: {
          src: '/assets/7/5.webp',
          alt: 'THE Wave residential tower',
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `The material palette is clean and contemporary: white rendered concrete, expansive glazing, and aluminum fins that trace the curves of the facade. At the ground level, the design becomes porous and pedestrian-friendly, with the retail podium creating a dynamic, engaging street presence.`,
        },
      },
    ],
  },

  {
    id: 'the-urban-nexus',
    title: 'The Urban Nexus',
    location: 'Lucknow, Uttar Pradesh',
    type: 'Mixed-Use Development',
    status: 'Concept / Design Development',
    area: '23,314.6 m²',
    description: `The Urban Nexus is a bold reimagining of mixed-use architecture in the heart of Lucknow. Conceived as two 14-story towers—one housing a premium hotel, the other luxury studio apartments—the design is unified by a dramatic sky-bridge that spans the gap between the blocks, creating both a visual anchor and a functional connection. Below, a multi-story atrium flooded with natural light serves as the social and commercial heart of the development.`,

    coverImage: '/assets/24.webp',
    images: [
      '/assets/24/1.webp',
      '/assets/24/2.webp',
      '/assets/24/3.webp',
      '/assets/24/4.webp',
      '/assets/24/5.webp',
      '/assets/24/6.webp',
      '/assets/24/7.webp',
      '/assets/24/8.webp',
      '/assets/24/9.webp',
      '/assets/24/10.webp',
      '/assets/24/11.webp',
    ],
    sections: [
      {
        type: 'TextRight',
        props: {
          text: `The Urban Nexus is a bold reimagining of mixed-use architecture in the heart of Lucknow. Conceived as two 14-story towers—one housing a premium hotel, the other luxury studio apartments—the design is unified by a dramatic sky-bridge that spans the gap between the blocks, creating both a visual anchor and a functional connection. Below, a multi-story atrium flooded with natural light serves as the social and commercial heart of the development.`,
        },
      },
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'The Urban Nexus' },
            { label: 'Typology', value: 'Mixed-Use Development' },
            { label: 'Location', value: 'Lucknow, Uttar Pradesh' },
            { label: 'Program', value: 'Hotel + Serviced Apartments + Retail' },
            { label: 'Status', value: 'Concept / Design Development' },
            { label: 'Site Area', value: '23,314.6 m²' },
            { label: 'Client', value: 'Migsun Group' },
          ],
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/24/2.webp',
          alt: 'The Urban Nexus exterior view',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          subtext: 'Two Towers, One Vision',
          heading: 'The twin towers rise as distinct yet harmonious forms. Each block is clad in a contemporary facade of glass and metal, creating a vertical rhythm that defines the skyline.',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/24/3.webp',
          alt: 'The Urban Nexus facade detail',
          heading: 'The Sky-Bridge',
          text: `The defining gesture of The Urban Nexus is the suspended sky-bridge—a dramatic horizontal volume that floats between the towers at mid-height. This is not merely a circulation link but a destination in itself, housing shared amenities, lounges, and viewing platforms that offer sweeping panoramas of the city. The bridge symbolizes connection—between hotel guests and residents, between public and private, between earth and sky.`,
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'Vertical Expression',
          images: [
            '/assets/24/4.webp',
            '/assets/24/5.webp',
            '/assets/24/6.webp',
          ],
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `The facades are defined by a rhythmic interplay of glass and solid panels. Vertical aluminum fins create depth and texture while managing solar heat gain.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/24/7.webp',
          alt: 'The Urban Nexus material palette',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/24/8.webp',
          alt: 'The Urban Nexus atrium',
          heading: 'The Central Atrium',
          text: `At ground level, the design opens up to create a multi-story atrium that serves as the commercial and social nucleus of the development. High-street retail wraps the perimeter, while cascading hanging gardens and terraced seating zones animate the vertical space. Natural light filters through the glass roof, creating a dynamic, ever-changing atmosphere throughout the day. This is a space designed for congregation, discovery, and urban life.`,
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'Cantilevered floor plates add sculptural drama to the facade. These projections create shaded outdoor terraces while establishing a powerful three-dimensional presence.',
        },
      },
      {
        type: 'ImageRight',
        props: {
          src: '/assets/24/9.webp',
          alt: 'The Urban Nexus public plaza',
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/24/10.webp',
          alt: 'The Urban Nexus night view',
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `At night, integrated lighting transforms the development into a glowing urban landmark. The sky-bridge becomes a beacon of connectivity suspended against the night sky.`,
        },
      },
      {
        type: 'ImageLeft',
        props: {
          src: '/assets/24/11.webp',
          alt: 'The Urban Nexus overall perspective',
        },
      },
    ],
  },

  {
    id: 'the-crescent-studios',
    title: 'The Crescent Studios',
    location: 'Lucknow, Uttar Pradesh, India',
    type: 'High-Street Retail + Serviced Apartments',
    status: 'Concept / Design Development',
    area: '16187.4 m²',
    description: `Redefining the metropolitan skyline, this mixed-use development transcends the traditional, rigid geometry of the high-rise typology. Conceived as a continuous, sweeping gesture, the architecture seamlessly negotiates the transition between the vibrant public realm and elevated private sanctuary. The project merges a high-capacity retail podium with a soaring, sculptural residential tower, creating a dynamic new locus for the city.`,

    coverImage: '/assets/5.webp',
    images: [
      '/assets/5/1.webp',
      '/assets/5/2.webp',
      '/assets/5/3.webp',
      '/assets/5/4.webp',
      '/assets/5/5.webp',
      '/assets/5/6.webp',
    ],
    sections: [
      {
        type: 'TextRight',
        props: {
          text: `Redefining the metropolitan skyline, this mixed-use development transcends the traditional, rigid geometry of the high-rise typology. Conceived as a continuous, sweeping gesture, the architecture seamlessly negotiates the transition between the vibrant public realm and elevated private sanctuary. The project merges a high-capacity retail podium with a soaring, sculptural residential tower, creating a dynamic new locus for the city.`,
        },
      },
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'The Crescent Studios' },
            { label: 'Typology', value: 'High-Street Retail + Serviced Apartments' },
            { label: 'Location', value: 'Lucknow, Uttar Pradesh, India' },
            { label: 'Program', value: '4 Floors of High-Street Retail + 30 Floors of Studio Apartments' },
            { label: 'Status', value: 'Concept / Design Development' },
            { label: 'Site Area', value: '4 Acres' },
            { label: 'Client', value: 'Migsun Group' },
          ],
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/5/1.webp',
          alt: 'The Crescent Studios exterior view',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          subtext: 'The Civic Threshold',
          heading: 'At ground level, the architecture is designed for maximum urban permeability. The 4-story high-street retail podium acts as a civic catalyst, defined by expansive, curved glazing and a soaring canopy.',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/5/2.webp',
          alt: 'The Crescent Studios podium detail',
          heading: 'High-Street Podium',
          text: `Rather than a static base, the podium is a fluid, circulatory landscape that blurs the boundary between the streetscape and the interior commercial environment, maximizing frontage and public engagement. The architecture draws the pedestrian realm inward, creating a seamless transition from the urban fabric to the retail experience.`,
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `Rising from the podium are 30 floors of premium serviced studio apartments, housed within a striking crescent morphology. This geometric orientation was engineered to optimize natural light penetration and offer residents uninterrupted sightlines across the urban grid.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/5/3.webp',
          alt: 'The Crescent Studios tower view',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/5/4.webp',
          alt: 'The Crescent Studios facade detail',
          heading: 'Parametric Morphology',
          text: `The facade is characterized by its tectonic rhythm. Continuous, undulating balconies wrap the perimeter, functioning both as passive environmental controls (brise-soleil) and as an aesthetic device that breaks down the tower's monolithic scale. This horizontal banding creates a kinetic visual effect, allowing the building's profile to shift and evolve depending on the viewer's vantage point.`,
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'Continuous Spatial Flow',
          images: [
            '/assets/5/5.webp',
            '/assets/5/6.webp',
          ],
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'The transition from the high-energy retail base to the serene residential levels is articulated without abrupt visual breaks, creating a singular, unified structural entity.',
        },
      },
      {
        type: 'ImageRight',
        props: {
          src: '/assets/5/1.webp',
          alt: 'The Crescent Studios overall view',
        },
      },
    ],
  },

  {
    id: 'limassol-office',
    title: 'London Meets Limassol',
    location: 'Limassol, Cyprus',
    type: 'Office Interior Design',
    status: 'Concept / Design Development',
    area: '5,000 Sq.ft',
    description: `Located in the sun-drenched landscape of Cyprus, this bespoke office interior was commissioned by a London-based marketing firm seeking a workspace that balances raw, urban grit with Mediterranean warmth. The design serves as a bridge between the client's metropolitan roots and the vibrant, natural energy of its new island location.`,

    coverImage: '/assets/30.webp',
    images: [
      '/assets/30/1.webp',
      '/assets/30/2.webp',
      '/assets/30/3.webp',
      '/assets/30/4.webp',
      '/assets/30/5.webp',
      '/assets/30/6.webp',
    ],
    sections: [
      {
        type: 'TextRight',
        props: {
          text: `Located in the sun-drenched landscape of Cyprus, this bespoke office interior was commissioned by a London-based marketing firm seeking a workspace that balances raw, urban grit with Mediterranean warmth. The design serves as a bridge between the client's metropolitan roots and the vibrant, natural energy of its new island location.`,
        },
      },
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'London Meets Limassol' },
            { label: 'Typology', value: 'Office Interior Design' },
            { label: 'Location', value: 'Limassol, Cyprus' },
            { label: 'Program', value: 'Boutique Office' },
            { label: 'Status', value: 'Concept / Design Development' },
            { label: 'Area', value: '5,000 Sq.ft' },
            { label: 'Client', value: 'Undisclosed' },
          ],
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/30/1.webp',
          alt: 'Limassol office interior',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          subtext: 'Raw & Refined',
          heading: 'The brief centered on a desire for raw textures and earthy tones. We leaned into an industrialist aesthetic, utilizing a material palette that prioritizes honesty and tactility.',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/30/2.webp',
          alt: 'Limassol office materiality',
          heading: 'Tectonic Materiality',
          text: `The walls feature exposed board-formed concrete, providing a cool, brutalist backdrop that contrasts beautifully with the warmth of the dark wood herringbone flooring. By stripping back the "corporate mask," we created a high-energy environment that fosters the creativity and transparency essential to a leading marketing agency.`,
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `Embracing an "open-plenum" concept, the mechanical and electrical systems (MEP) are left exposed. The silver ductwork acts as a functional sculpture, adding a sense of verticality and "loft-style" volume to the workspace.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/30/3.webp',
          alt: 'Industrialist ceiling treatment',
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'Biophilic Integration',
          images: [
            '/assets/30/4.webp',
            '/assets/30/5.webp',
          ],
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'To counteract the raw industrial elements, we integrated lush internal greenery alongside floor-to-ceiling glazing that frames the external landscape. This biophilic approach provides a natural "pop" of color, softening the brutalist textures.',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/30/6.webp',
          alt: 'Executive suite detail',
          heading: 'Fluid Professionalism',
          text: `The executive suite features a sculptural, bronze-finished desk and mid-century modern seating, reflecting the sophisticated "London" character of the brand while maintaining the office's overall earthy, grounded atmosphere. This space embodies the fusion of metropolitan refinement and Mediterranean ease.`,
        },
      },
    ],
  },

  {
        id: 'noida-one',
        title: 'Noida One',
        location: 'Noida',
        type: 'Commercial',
        status: 'Concept / Design Development',
        area: '15,000 m²',

        coverImage: '/assets/2.webp',  
        sections: [
          {
            type: 'KeyInfo',
            props: {
              items: [
                { label: 'Project', value: 'Noida One' },
                { label: 'Typology', value: 'Commercial' },
                { label: 'Location', value: 'Noida, India' },
                { label: 'Program', value: 'Office' },
                { label: 'Status', value: 'Concept / Design Development' },
                { label: 'Area', value: '15,000 m²' },
                { label: 'Client', value: 'Undisclosed' },
              ],
            },
          },
        ]
  },

  {
    id: 'bachelor-pad',
    title: 'BACHELOR PAD',
    coverImage: '/assets/4.webp',
    // location: 'Noida',
    // type: 'Commercial',
    // status: 'Concept / Design Development',
    // area: '15,000 m²',
  },

  {
    id: 'the-hex',
    title: 'The Hex',
    location: 'Undisclosed',
    type: 'Government Office',
    status: 'Concept / Design Development',
    area: '5 Acres',
    description: `The Integrated Operations Hub is a ground-breaking facility designed with a high level of discretion for a confidential agency. This secure operations node breaks the traditional mold of monolithic block architecture, employing a complex of intersecting concentric volumes and radial wings. The result is a highly efficient yet humane environment where architecture and landscape are inseparable.`,

    coverImage: '/assets/23.webp',
    images: [
      '/assets/23/1.webp',
      '/assets/23/2.webp',
      '/assets/23/3.webp',
    ],
    sections: [
      {
        type: 'TextRight',
        props: {
          text: `The Integrated Operations Hub is a ground-breaking facility designed with a high level of discretion for a confidential agency. This secure operations node breaks the traditional mold of monolithic block architecture, employing a complex of intersecting concentric volumes and radial wings. The result is a highly efficient yet humane environment where architecture and landscape are inseparable.`,
        },
      },
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'The Hex' },
            { label: 'Typology', value: 'Government Office' },
            { label: 'Location', value: 'Undisclosed' },
            { label: 'Program', value: 'Government Office' },
            { label: 'Status', value: 'Concept / Design Development' },
            { label: 'Site Area', value: '5 Acres' },
            { label: 'Client', value: 'Undisclosed' },
          ],
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/23/2.webp',
          alt: 'The Hex exterior view',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          subtext: 'Concept & Form',
          heading: 'At the heart of the complex, a monumental central open-air rotunda serves as a secured public/private mixing chamber and a central core, capped with a subtle, domed canopy that filters natural light.',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/23/3.webp',
          alt: 'The Hex architectural detail',
          heading: 'Architectural Skin & Biophilia',
          text: `The facility's architectural language is defined by a performative skin of curved curtain walls, articulated with a rhythmic grid of horizontal spandrels and vertical brise-soleils (louvers). These elements work in concert to modulate dynamic solar gain and ensure critical visual privacy while maximizing interior natural light. The terraced, glass-clad volumes create extensive, accessible green roof terraces at every operational level, establishing a powerful and ever-present biophilic connection for users.`,
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `Surrounding the core, multi-level office wings cascade in terraced forms, stepping down to engage with the natural terrain. The ground-level podium is porous, with a finely grained network of vertical fins that manage access and security without creating a hostile perimeter.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/23/1.webp',
          alt: 'The Hex site integration',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'Site planning is meticulous, designed to provide layered security through landscape rather than walling. The facility is secluded within a dense, indigenous forest, which forms a critical security setback and a natural camouflage.',
        },
      },
    ],
  },

  {
    id: 'the-aurelia-villa',
    title: 'The Aurelia Villa',
    location: 'New Delhi',
    type: 'Residential',
    status: 'Concept / Design Development',
    area: '2 Acres',
    description: `Designed as a bespoke holiday sanctuary for a New Delhi-based client, this luxury villa offers a serene counterpoint to the bustling metropolis. The project is conceived not just as a residence, but as an immersive, resort-like retreat where striking contemporary architecture harmonizes with tranquil water features and lush landscapes.`,

    coverImage: '/assets/25.webp',
    images: [
      '/assets/25/1.webp',
      '/assets/25/2.webp',
      '/assets/25/3.webp',
      '/assets/25/4.webp',
      '/assets/25/5.webp',
      '/assets/25/6.webp',
      '/assets/25/7.webp',
      '/assets/25/8.webp',
      '/assets/25/9.webp',
      '/assets/25/10.webp',
    ],
    sections: [
      {
        type: 'TextRight',
        props: {
          text: `Designed as a bespoke holiday sanctuary for a New Delhi-based client, this luxury villa offers a serene counterpoint to the bustling metropolis. The project is conceived not just as a residence, but as an immersive, resort-like retreat where striking contemporary architecture harmonizes with tranquil water features and lush landscapes.`,
        },
      },
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'The Aurelia Villa' },
            { label: 'Typology', value: 'Residential' },
            { label: 'Location', value: 'New Delhi' },
            { label: 'Program', value: 'Vacation Home' },
            { label: 'Status', value: 'Concept / Design Development' },
            { label: 'Site Area', value: '2 Acres' },
            { label: 'Client', value: 'Undisclosed' },
          ],
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/25/3.webp',
          alt: 'The Aurelia Villa exterior view',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          subtext: 'Geometric Harmony',
          heading: 'At the heart of the design is an innovative Y-shaped, tri-radial footprint. Three distinct wings radiate from a central nexus, a deliberate spatial strategy that maximizes privacy while optimizing natural light and cross-ventilation.',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/25/2.webp',
          alt: 'The Aurelia Villa tri-radial plan',
          heading: 'The Tri-Radial Plan',
          text: `This branching layout creates intimate, semi-enclosed courtyards between the volumes, ensuring that every interior space maintains a direct, uninterrupted connection to the surrounding nature. The configuration maximizes views while maintaining privacy across the different wings of the residence.`,
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `The villa's exterior presents a bold, monolithic massing that is softened by a delicate, randomized perforated facade—a modern, abstract interpretation of traditional vernacular screens.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/25/6.webp',
          alt: 'The Aurelia Villa perforated facade',
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'The Perforated Veil',
          images: [
            '/assets/25/4.webp',
            '/assets/25/5.webp',
            '/assets/25/1.webp',
          ],
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/25/7.webp',
          alt: 'The Aurelia Villa daylight interplay',
          heading: 'Daylight Interplay',
          text: `During the day, this porous skin filters harsh sunlight, casting dynamic, dappled shadows across the interior spaces. As night falls, the architecture undergoes a dramatic transformation. Internal lighting shines through the perforations, turning the solid volumes into a glowing, ethereal lantern that reflects beautifully across the adjacent water bodies.`,
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'Tying the geometric blocks together is an expansive, undulating roof canopy. This fluid, sculptural element contrasts with the orthogonal walls below, providing deep, protective overhangs that shade the expansive glass facades and upper terraces.',
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/25/8.webp',
          alt: 'The Aurelia Villa roof canopy',
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'Fluidity and Transition',
          images: [
            '/assets/25/9.webp',
            '/assets/25/10.webp',
          ],
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `Deeply recessed, softly curved portals frame the transitional balconies and patios, blurring the boundary between the luxurious interiors and the expansive reflective pools that wrap around the property.`,
        },
      },
    ],
  },

  {
    id: 'pathcare-research-campus',
    title: 'The Pathcare Research Campus',
    location: 'Noida',
    type: 'Commercial',
    status: 'Concept / Design Development',
    area: '4,500 Sq.mt',
    description: `Designed as the future-forward headquarters for Pathcare, a pioneering pathology and research organization, this state-of-the-art facility is a study in adaptable master planning. The project was conceived as a dynamic, two-phase development, ensuring the architecture can evolve in tandem with the company's expanding research capabilities.`,

    coverImage: '/assets/16.webp',
    images: [
      '/assets/16/1.webp',
      '/assets/16/2.webp',
      '/assets/16/3.webp',
      '/assets/16/4.webp',
      '/assets/16/5.webp',
      '/assets/16/6.webp',
      '/assets/16/7.webp',
      '/assets/16/8.webp',
      '/assets/16/9.webp',
      '/assets/16/10.webp',
      '/assets/16/11.webp',
      '/assets/16/12.webp',
      '/assets/16/13.webp',
      '/assets/16/14.webp',
      '/assets/16/15.webp',
      '/assets/16/16.webp',
      '/assets/16/17.webp',
      '/assets/16/18.webp',
      '/assets/16/19.webp',
      '/assets/16/20.webp',
    ],
    sections: [
      {
        type: 'TextRight',
        props: {
          text: `Designed as the future-forward headquarters for Pathcare, a pioneering pathology and research organization, this state-of-the-art facility is a study in adaptable master planning. The project was conceived as a dynamic, two-phase development, ensuring the architecture can evolve in tandem with the company's expanding research capabilities.`,
        },
      },
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'The Pathcare Research Campus' },
            { label: 'Typology', value: 'Commercial' },
            { label: 'Location', value: 'Noida' },
            { label: 'Program', value: 'Research Lab' },
            { label: 'Status', value: 'Concept / Design Development' },
            { label: 'Site Area', value: '4,500 Sq.mt' },
            { label: 'Client', value: 'Pathcare' },
          ],
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/16/5.webp',
          alt: 'The Pathcare Research Campus exterior view',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          subtext: 'Cohesive Phasing',
          heading: 'The central architectural challenge was avoiding the "incomplete" look often associated with phased construction. The design required a Phase One tower that stands as a balanced, striking, and fully resolved architectural statement on its own.',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/16/2.webp',
          alt: 'The Pathcare Research Campus phase one',
          heading: 'The Continuous Ribbon',
          text: `To achieve this duality, the design employs a bold, unifying motif: a sweeping, continuous ribbon of warm, metallic louvers. In the initial phase, these sculptural fins cascade smoothly down the primary glass tower, swooping outward to form a grounded podium and a dramatic, organically-shaped entrance canopy. The building feels rooted and complete.`,
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `Upon expansion, this identical architectural ribbon will extend across the connecting base and sweep upward to envelop the second tower, completing a cohesive, U-shaped composition that embraces a central, collaborative courtyard.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/16/3.webp',
          alt: 'The Pathcare Research Campus phase two expansion',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/16/4.webp',
          alt: 'The Pathcare Research Campus facade detail',
          heading: 'Materiality and Performance',
          text: `The facade presents a striking juxtaposition between high-performance, cool-toned glass curtain walls and the warmth of the sculptural, bronze-finished ribs. For a research and pathology laboratory, controlling natural light is paramount. The metallic fins act as an integrated shading system, mitigating solar heat gain and glare while allowing optimal, diffuse daylight into the sensitive workspaces inside.`,
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'By night, strategic illumination along these sweeping ribs transforms the campus into a glowing beacon of scientific innovation.',
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'Phase One Elegance',
          images: [
            '/assets/16/7.webp',
            '/assets/16/6.webp',
            '/assets/16/1.webp',
          ],
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/16/8.webp',
          alt: 'The Pathcare Research Campus entrance',
          heading: 'The Dramatic Entrance',
          text: `The entrance canopy represents the ribbon's most expressive moment. The sculptural louvers sweep down from the tower's facade, creating an organically-shaped, protective overhang that guides visitors into the facility. This gesture transforms a functional element into an architectural signature—a welcoming threshold that announces the building's innovative spirit.`,
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `The building stands as a complete architectural statement in Phase One, yet contains the geometric DNA for seamless future expansion.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/16/9.webp',
          alt: 'The Pathcare Research Campus podium',
        },
      },
      {
        type: 'ImageRight',
        props: {
          src: '/assets/16/10.webp',
          alt: 'The Pathcare Research Campus facade rhythm',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'The metallic ribs create a rhythmic, sculptural pattern that provides both aesthetic beauty and functional shading for the sensitive research laboratories within.',
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'The Ribbon in Detail',
          images: [
            '/assets/16/11.webp',
            '/assets/16/12.webp',
            '/assets/16/13.webp',
          ],
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/16/14.webp',
          alt: 'The Pathcare Research Campus courtyard',
          heading: 'Phase Two Synergy',
          text: `The Phase Two expansion completes the vision with a second tower connected by a unified base. The continuous ribbon motif flows seamlessly across both structures, creating a U-shaped composition that embraces a central collaborative courtyard. This outdoor space becomes the social and intellectual heart of the campus—a place for researchers to gather, exchange ideas, and find inspiration amidst greenery and filtered sunlight.`,
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `The courtyard acts as a visual and functional link between the two phases, fostering collaboration and community within the research campus.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/16/15.webp',
          alt: 'The Pathcare Research Campus full campus view',
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `As day transitions to night, integrated LED lighting highlights the flowing metallic ribs, transforming the architecture into a luminous landmark that celebrates scientific progress and innovation.`,
        },
      },
      {
        type: 'ImageLeft',
        props: {
          src: '/assets/16/16.webp',
          alt: 'The Pathcare Research Campus at dusk',
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'Night-Time Transformation',
          images: [
            '/assets/16/17.webp',
            '/assets/16/18.webp',
            '/assets/16/19.webp',
          ],
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/16/20.webp',
          alt: 'The Pathcare Research Campus illuminated',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: `The Pathcare Research Campus stands as a testament to architecture that evolves—a facility designed not just for today, but for tomorrow's expanding horizons of scientific discovery.`,
        },
      },
    ],
  },

  {
    id: 'inter-weave',
    title: 'Inter Weave',
    location: 'Faridabad, Haryana',
    type: 'Branded Ultra-Luxury Mall',
    status: 'Concept / Design Development',
    area: '30 Acres',
    description: `The Weave represents a conscious departure from the rigid orthography typical of modern commercial developments. Conceived as a highly permeable urban ecosystem, the project introduces an undulating retail and pedestrian promenade that nestles naturally at the base of the surrounding high-density residential fabric. The design prioritizes spatial continuity, drawing visitors through a choreographed sequence of interconnected public plazas, open-air terraces, and intimate courtyards.`,

    coverImage: '/assets/9.webp',
    images: [
      '/assets/9/1.webp',
      '/assets/9/2.webp',
      '/assets/9/3.webp',
      '/assets/9/4.webp',
      '/assets/9/5.webp',
      '/assets/9/6.webp',
      '/assets/9/7.webp',
    ],
    sections: [
      {
        type: 'TextRight',
        props: {
          text: `The Weave represents a conscious departure from the rigid orthography typical of modern commercial developments. Conceived as a highly permeable urban ecosystem, the project introduces an undulating retail and pedestrian promenade that nestles naturally at the base of the surrounding high-density residential fabric. The design prioritizes spatial continuity, drawing visitors through a choreographed sequence of interconnected public plazas, open-air terraces, and intimate courtyards.`,
        },
      },
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'Inter Weave' },
            { label: 'Typology', value: 'Branded Ultra-Luxury Mall' },
            { label: 'Location', value: 'Faridabad, Haryana' },
            { label: 'Program', value: 'High Street Retail' },
            { label: 'Status', value: 'Concept / Design Development' },
            { label: 'Site Area', value: '30 Acres Master Plan' },
            { label: 'Client', value: 'GPM Architects / RPS' },
          ],
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/9/1.webp',
          alt: 'Inter Weave exterior view',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          subtext: 'The Architecture of Flow',
          heading: 'The design prioritizes spatial continuity, drawing visitors through a choreographed sequence of interconnected public plazas, open-air terraces, and intimate courtyards.',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/9/2.webp',
          alt: 'Inter Weave material language',
          heading: 'Material Dialogue',
          text: `Materially, the facades establish a dialogue between stark, contemporary lines and organic textures. The striking purity of sweeping white horizontal fasciae is rhythmically interrupted by the warmth of vertical timber louvers. Below, expansive, double-height fenestration effectively dissolves the threshold between the interior commercial spaces and the exterior public realm, creating a highly porous, activated streetscape.`,
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `Circulation throughout the precinct is organized along a primary pedestrian spine, entirely anchored by the monumental sculptural intervention from which the project takes its name.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/9/3.webp',
          alt: 'Inter Weave central plaza',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/9/4.webp',
          alt: 'Inter Weave sculptural lattice',
          heading: 'The Weave',
          text: `"The Weave"—a soaring, parametrically designed lattice structure finished in a warm metallic tone—acts as both a critical wayfinding node and the spatial heart of the development. This central plaza is flanked by expansive reflecting pools. These shallow waterscapes serve a vital atmospheric purpose, subtly modulating the local microclimate while providing a mirrored datum that amplifies the geometry of the surrounding architecture and the central folly.`,
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'The central woven lattice emerges as both sculpture and infrastructure—a landmark that draws visitors into the heart of the retail experience while providing shaded gathering spaces beneath its geometric canopy.',
        },
      },
      {
        type: 'ImageRight',
        props: {
          src: '/assets/9/5.webp',
          alt: 'Inter Weave reflecting pools',
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `As the diurnal cycle shifts, the complex is transformed by a carefully calibrated lighting strategy. Concealed architectural illumination traces the structural ribs and highlights the timber articulation.`,
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/9/7.webp',
          alt: 'Inter Weave night illumination',
          heading: 'Nocturnal Transformation',
          text: `The central woven lattice acts as a glowing lantern for the entire precinct. The resulting atmosphere activates the promenade long after sunset, establishing a sophisticated environment optimized for evening dining, retail, and civic engagement. The interplay between light, water, and architecture creates an immersive experience that evolves throughout the day.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/9/6.webp',
          alt: 'Inter Weave pedestrian promenade',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'Inter Weave stands as a testament to architecture that dissolves boundaries—between interior and exterior, between commerce and community, between urban fabric and natural landscape.',
        },
      },
    ],
  },

  {
    id: 'the-portal',
    title: 'The Portal',
    location: 'Faridabad, Haryana, India',
    type: 'Retail + Mixed Use Tower',
    status: 'Concept / Design Development',
    area: '30 Acres',
    program: '4-Level Experiential Retail Podium',
    client: 'GPM Architects / Omaxe',
    description: `The Portal is conceived as a bold urban anchor, redefining the commercial corridor through a highly extroverted and technologically integrated architectural response. The massing strategy employs a prominent, multi-level retail plinth that establishes a continuous, active street wall, from which distinct vertical volumes rise to accommodate commercial and administrative functions.`,
    coverImage: '/assets/10.webp',
    images: [
      '/assets/10/1.webp',
      '/assets/10/2.webp',
      '/assets/10/3.webp',
      '/assets/10/4.webp',
    ],
    sections: [
      {
        type: 'TextRight',
        props: {
          text: `The Portal is conceived as a bold urban anchor, redefining the commercial corridor through a highly extroverted and technologically integrated architectural response. The massing strategy employs a prominent, multi-level retail plinth that establishes a continuous, active street wall, from which distinct vertical volumes rise to accommodate commercial and administrative functions.`,
        },
      },
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'The Portal' },
            { label: 'Typology', value: 'Retail + Mixed Use Tower' },
            { label: 'Location', value: 'Faridabad, Haryana, India' },
            { label: 'Site Area', value: '30 Acres' },
            { label: 'Program', value: '4-Level Experiential Retail Podium' },
            { label: 'Client', value: 'GPM Architects / Omaxe' },
            { label: 'Status', value: 'Concept / Design Development' },
          ],
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/10/2.webp',
          alt: 'The Portal - Aerodynamic Form and Digital Integration',
        },
      },
      // {
      //   type: 'HeadingLeft',
      //   props: {
      //     heading: 'Contemporary Streamlining',
      //   },
      // },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/10/3.webp',
          alt: 'The Portal - Sweeping Radiused Corners',
          heading: 'Contemporary Streamlining',
          text: `The project's formal language embraces a contemporary streamlining. The rigid orthography of the towers is softened by sweeping, aerodynamic radiused corners across the podium. This horizontal dynamism is reinforced by stark white fascia that wrap the perimeter, acting as a continuous architectural ribbon. These bands successfully unify the complex's diverse functional zones while providing deep, cantilevered overhangs for pedestrian shading along the boulevard.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/10/4.webp',
          alt: 'The Portal - Nocturnal Architectural Expression',
        },
      },
      // {
      //   type: 'HeadingRight',
      //   props: {
      //     heading: 'Dynamic Digital Canvas',
      //   },
      // },
      // {
      //   type: 'TextRight',
      //   props: {
      //     text: `Moving beyond traditional static cladding, the primary facade is treated as a dynamic digital canvas. Expansive, flush-mounted LED screens are seamlessly integrated into the architectural skin rather than applied as afterthoughts, transforming the building into a kinetic monument. This deliberate integration of media and architecture allows the structure to communicate directly with the urban realm, offering an immersive, high-impact presence optimized for premium retail visibility.`,
      //   },
      // },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'Nocturnal Transformation',
        },
      },
      {
        type: 'TextRight',
        props: {
          text: `The development achieves its most dramatic architectural expression after twilight. A continuous network of electric blue architectural lighting traces the complex's contours, sharply articulating the sweeping horizontal geometry against the night sky. This high-contrast, futuristic illumination, paired with the inviting warmth radiating from the double-height glazed storefronts at the pedestrian level, creates a vibrant, cosmopolitan atmosphere that activates the public realm and establishes The Portal as a premier 24-hour destination.`,
        },
      },
    ],
  },

  {
    id: 'urban-square',
    title: 'Urban Square',
    location: 'Hindaun City, Rajasthan',
    type: 'Retail',
    status: 'Concept / Design Development',
    area: '300 Sq.mt',
    client: 'Undisclosed',
    description: `This landmark retail development, located on a prominent corner plot in a Tier 3 city, represents a deliberate effort to synthesize modern architectural form with deep-rooted cultural heritage. Far from being a standard, placeless commercial structure, the project serves as a contextual catalyst, proving that high-end design can be meaningfully localized.`,
    coverImage: '/assets/32.webp',
    images: [
      '/assets/32/1.webp',
      '/assets/32/2.webp',
      '/assets/32/3.webp',
      '/assets/32/4.webp',
      '/assets/32/5.webp',
    ],
    sections: [
      {
        type: 'TextRight',
        props: {
          text: `This landmark retail development, located on a prominent corner plot in a Tier 3 city, represents a deliberate effort to synthesize modern architectural form with deep-rooted cultural heritage. Far from being a standard, placeless commercial structure, the project serves as a contextual catalyst, proving that high-end design can be meaningfully localized.`,
        },
      },
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'Urban Square' },
            { label: 'Typology', value: 'Retail' },
            { label: 'Location', value: 'Hindaun City, Rajasthan' },
            { label: 'Site Area', value: '300 Sq.mt' },
            { label: 'Client', value: 'Undisclosed' },
            { label: 'Status', value: 'Concept / Design Development' },
          ],
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/32/2.webp',
          alt: 'Urban Square exterior view',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          subtext: 'Architectural Concept & Facade',
          heading: `The project's architectural expression is defined by its dramatic, curvilinear massing and organic verticality, culminating in a distinctive tapered form that creates a new urban silhouette.`,
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/32/3.webp',
          alt: 'Urban Square perforated facade',
          heading: 'The Contextual Lattice',
          text: `Central to the project's identity is the intricate, parametrically designed perforated facade screen. Rather than an arbitrary geometric pattern, this complex lattice is carefully derived from traditional textile and building motifs native to the region. This screen acts as a porous, textured 'second skin' that balances current modernism with a historic narrative. This skin serves crucial passive roles, providing vital solar shading and privacy while creating a dynamic and ever-shifting dialogue of dappled light and shadow across the interior spaces and streetscape.`,
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: `At the ground plane, the building's base is expressed as a fully transparent, double-height glazed podium. This light and inviting retail plinth acts as an active urban catalyst, allowing interior retail activity to dissolve into the streetscape.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/32/4.webp',
          alt: 'Urban Square transparent podium',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/32/5.webp',
          alt: 'Urban Square urban context',
          heading: 'The Urban Plinth & Dialogue',
          text: `The transparency of this new 'active edge' creates a deliberate and respectful contrast with the heavier, traditional stone and masonry architecture that characterizes the surrounding area, establishing a sophisticated dialogue between new and old. The building is designed for diurnal transformation. By day, the patterned screen absorbs and modulates daylight; by night, the interior is illuminated, causing the building to emit a soft, localized glow that activates the neighborhood and showcases the detailed pattern from a distance.`,
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'Urban Square is a powerful intervention that celebrates its location, offering a premium, heritage-driven experience for the modern consumer.',
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/32/1.webp',
          alt: 'Urban Square overall view',
        },
      },
    ],
  },

  {
    id: "masterplan-projects",
    title: "Masterplan Projects",
    coverImage: '/assets/12.webp',
  },

  {
    id: "crescent-high-street",
    title: "The Crescent High Street",
    coverImage: '/assets/29.webp',
  },

  {
    id: "house27",
    title: "House 27",
    coverImage: '/assets/27.webp',
  }

];

// Map from imageKey to projectId — covers both new img1…img32 keys (current home page)
// Images are distributed across projects in round-robin order (12 projects × ~3 images each)
export const imageKeyToProject = {
  // ── New home page image keys (img1–img32) ──────────────────────────────
  img1:  'urban-renaissance',
  img2:  'noida-one',
  img3:  'shards',
  img4:  'bachelor-pad',
  img5:  'the-crescent-studios',
  img6:  'migsun-mixed-use',
  img7:  'the-wave',
  img8:  'noida',
  img9:  'inter-weave',
  img10: 'the-portal',
  img11: 'the-human-high-street',
  img12: 'masterplan-projects',
  img13: 'the-studio',
  img14: 'cascade',
  img15: 'gpm-retail',
  img16: 'pathcare-research-campus',
  img17: 'migsun-lucknow',
  img18: 'the-kinetic-ribbon',
  img19: 'm3m-jacob-and-co',
  img20: 'arcadia',
  img21: 'omaxe-mall',
  img22: 'pentagon',
  img23: 'the-hex',
  img24: 'the-urban-nexus',
  img25: 'the-aurelia-villa',
  img26: 'evolo',
  img27: 'house27',
  img28: 'm3m',
  img29: 'crescent-high-street',
  img30: 'limassol-office',
  img31: 'migsun-rohini',
  img32: 'urban-square',
};

export default projectData;
