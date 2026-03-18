// Project data for each architecture project
const projectData = [
  {
    id: 'conventional-center',
    title: 'Conventional Center',
    location: 'India',
    year: '2023',
    type: 'Convention & Cultural',
    status: 'Concept Design',
    area: '45,000 m²',
    description: `A bold civic landmark designed to redefine public assembly in an urban context. The Conventional Center brings together form and function through a seamless interplay of structure and space.

The design philosophy centers on creating a porous, light-filled environment that invites the city in while maintaining a strong architectural identity. Vast column-free spans allow flexible programming, from large-scale conventions to intimate cultural gatherings.

Sustainable strategies are embedded throughout — passive cooling, daylighting, and green roofs weave environmental responsibility into the building's very bones.`,
    coverImage: '/assets/1.webp',
    images: [
      '/assets/1.webp',
      '/assets/13.webp',
      '/assets/25.webp',
    ],
    sections: [
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'Conventional Center' },
            { label: 'Type', value: 'Convention & Cultural' },
            { label: 'Location', value: 'India' },
            { label: 'Year', value: '2023' },
            { label: 'Status', value: 'Concept Design' },
            { label: 'Area', value: '45,000 m²' },
          ],
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'A New Civic Landmark',
          subtext: 'Convention & Cultural · India · 2023',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/13.webp',
          alt: 'Conventional Center interior view',
          heading: 'Concept',
          text: `A bold civic landmark designed to redefine public assembly in an urban context. The Conventional Center brings together form and function through a seamless interplay of structure and space.

The design philosophy centers on creating a porous, light-filled environment that invites the city in while maintaining a strong architectural identity.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/25.webp',
          alt: 'Conventional Center aerial render',
          caption: 'Site plan — conceptual render',
        },
      },
      {
        type: 'TextRight',
        props: {
          heading: 'Sustainability',
          text: `Sustainable strategies are embedded throughout — passive cooling, daylighting, and green roofs weave environmental responsibility into the building's very bones.

Vast column-free spans allow flexible programming, from large-scale conventions to intimate cultural gatherings.`,
        },
      },
      {
        type: 'ImageLeft',
        props: {
          src: '/assets/1.webp',
          alt: 'Conventional Center facade',
        },
      },
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
    id: 'gpm-retail',
    title: 'GPM Retail',
    location: 'India',
    year: '2023',
    type: 'Retail Complex',
    status: 'Design Development',
    area: '28,000 m²',
    description: `A contemporary retail destination that transforms the shopping experience through architecture. GPM Retail reimagines the commercial landscape with a design that prioritizes human experience over mere consumption.

The project introduces a series of interconnected courtyards that draw daylight deep into the retail floors, creating naturally lit environments that evolve through the day. The facade's rhythmic brise-soleil system mediates between interior comfort and exterior expression.

Community spaces woven throughout the complex invite gathering, performance, and pause — redefining the retail center as a true civic destination.`,
    coverImage: '/assets/3.webp',
    images: [
      '/assets/3.webp',
      '/assets/15.webp',
      '/assets/27.webp',
    ],
    sections: [
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'GPM Retail' },
            { label: 'Type', value: 'Retail Complex' },
            { label: 'Location', value: 'India' },
            { label: 'Year', value: '2023' },
            { label: 'Status', value: 'Design Development' },
            { label: 'Area', value: '28,000 m²' },
          ],
        },
      },
      {
        type: 'ImageRight',
        props: {
          src: '/assets/3.webp',
          alt: 'GPM Retail exterior',
        },
      },
      {
        type: 'TextRight',
        props: {
          heading: 'Human Experience',
          text: `A contemporary retail destination that transforms the shopping experience through architecture. GPM Retail reimagines the commercial landscape with a design that prioritizes human experience over mere consumption.

Community spaces woven throughout the complex invite gathering, performance, and pause — redefining the retail center as a true civic destination.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/15.webp',
          alt: 'GPM Retail courtyard',
          caption: 'Central courtyard — design development',
        },
      },
      {
        type: 'ImageLeft',
        props: {
          src: '/assets/27.webp',
          alt: 'GPM Retail facade detail',
        },
      },
    ],
  },
  {
    id: 'm3m',
    title: 'M3M',
    location: 'Gurugram, India',
    year: '2023',
    type: 'Luxury Mixed-Use',
    status: 'Under Construction',
    area: '85,000 m²',
    description: `A prestige mixed-use development that sets a new benchmark for luxury in Gurugram. M3M redefines urban living through a carefully curated programme of residences, retail, and amenity that creates a self-contained world.

The master plan arranges towers around a series of landscape gardens, allowing every residence to connect visually and physically with green space. The commercial podium activates the street edge with a varied retail frontage that encourages pedestrian life.

The architecture draws on a vocabulary of rich materials — stone, glass, and sculpted metal — to create a building family that is both cohesive and varied.`,
    coverImage: '/assets/4.webp',
    images: [
      '/assets/4.webp',
      '/assets/16.webp',
      '/assets/28.webp',
    ],
    sections: [
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'M3M' },
            { label: 'Type', value: 'Luxury Mixed-Use' },
            { label: 'Location', value: 'Gurugram, India' },
            { label: 'Year', value: '2023' },
            { label: 'Status', value: 'Under Construction' },
            { label: 'Area', value: '85,000 m²' },
          ],
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'A New Benchmark\nfor Luxury',
          subtext: 'Luxury Mixed-Use · Gurugram · 2023',
        },
      },
      {
        type: 'ImageLeft',
        props: {
          src: '/assets/16.webp',
          alt: 'M3M tower exterior',
        },
      },
      {
        type: 'TextRight',
        props: {
          heading: 'Vision',
          text: `A prestige mixed-use development that sets a new benchmark for luxury in Gurugram. M3M redefines urban living through a carefully curated programme of residences, retail, and amenity that creates a self-contained world.

Every detail has been considered — from the proportions of the entrance lobby to the planting palette of the rooftop gardens — to deliver an experience that is simultaneously grand and intimate.

This is not simply a building. It is a new address for Gurugram.`,
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'Master Plan',
          text: `The master plan arranges towers around a series of landscape gardens, allowing every residence to connect visually and physically with green space.

The commercial podium activates the street edge with a varied retail frontage that encourages pedestrian life and creates a destination for the neighbourhood.

Open courtyards between the towers ensure natural ventilation and daylighting throughout the development.`,
          images: [
            '/assets/4.webp',
            '/assets/16.webp',
            '/assets/28.webp',
          ],
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/28.webp',
          alt: 'M3M lobby interior',
          heading: 'The Residences',
          text: `Each residence is designed as a sanctuary — generous floor-to-ceiling glazing frames curated views of the landscaped gardens below, while deep balconies extend the living space into the open air.

Finishes have been selected to complement the architecture: warm stone, hand-selected timber, and bespoke metalwork combine to create interiors of exceptional quality.`,
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: 'Architecture\n& Materials',
          subtext: 'Stone · Glass · Sculpted Metal',
        },
      },
      {
        type: 'ImageCentreWithHeading',
        props: {
          heading: 'Materials & Identity',
          src: '/assets/4.webp',
          alt: 'M3M tower facade',
          caption: 'Tower facade — under construction',
        },
      },
    ],
  },
  {
    id: 'migsun-lucknow',
    title: 'Migsun Lucknow',
    location: 'Lucknow, India',
    year: '2022',
    type: 'Mixed-Use Development',
    status: 'Schematic Design',
    area: '54,000 m²',
    description: `A transformative mixed-use development for one of India's most culturally rich cities. Migsun Lucknow draws inspiration from the city's Nawabi heritage while projecting a thoroughly contemporary vision.

The project weaves traditional spatial sequences — gated courtyards, shaded verandahs, layered facades — into a modern programme of housing, retail, and hospitality. This dialogue between old and new creates a development with deep roots in its context.

Landscape is integral to the design, with a central green spine connecting the various building clusters and providing residents with a verdant heart at the centre of the development.`,
    coverImage: '/assets/5.webp',
    images: [
      '/assets/5.webp',
      '/assets/17.webp',
      '/assets/29.webp',
    ],
    sections: [
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'Migsun Lucknow' },
            { label: 'Type', value: 'Mixed-Use Development' },
            { label: 'Location', value: 'Lucknow, India' },
            { label: 'Year', value: '2022' },
            { label: 'Status', value: 'Schematic Design' },
            { label: 'Area', value: '54,000 m²' },
          ],
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/5.webp',
          alt: 'Migsun Lucknow overview',
          heading: 'Heritage & Modernity',
          text: `A transformative mixed-use development for one of India's most culturally rich cities. Migsun Lucknow draws inspiration from the city's Nawabi heritage while projecting a thoroughly contemporary vision.

The project weaves traditional spatial sequences — gated courtyards, shaded verandahs, layered facades — into a modern programme of housing, retail, and hospitality.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/17.webp',
          alt: 'Migsun Lucknow landscape',
          caption: 'Central green spine — schematic design',
        },
      },
      {
        type: 'TextRight',
        props: {
          heading: 'Landscape',
          text: `Landscape is integral to the design, with a central green spine connecting the various building clusters and providing residents with a verdant heart at the centre of the development.

Traditional spatial sequences are reimagined through a contemporary lens, creating a development with deep roots in its context.`,
        },
      },
      {
        type: 'ImageRight',
        props: {
          src: '/assets/29.webp',
          alt: 'Migsun Lucknow detail',
        },
      },
    ],
  },
  {
    id: 'migsun-mixed-use',
    title: 'Migsun Mixed Use',
    location: 'Delhi NCR, India',
    year: '2023',
    type: 'Mixed-Use Complex',
    status: 'Design Development',
    area: '72,000 m²',
    description: `A large-scale mixed-use complex that responds to the rapid urbanization of Delhi NCR with a sophisticated, layered programme. Migsun Mixed Use proposes three distinct design options, each exploring a different architectural language while maintaining programmatic consistency.

Option 1 employs a clean, horizontal language, with broad cantilevered overhangs creating sheltered streets at ground level. Option 2 articulates the towers with deep-set vertical fins that bring rhythm and scale to the elevation. Option 3 pursues a more fluid approach, with curved facades that soften the urban edge.

All three options share a commitment to quality public space, with a landscaped central plaza at the heart of the development.`,
    coverImage: '/assets/6.webp',
    images: [
      '/assets/6.webp',
      '/assets/18.webp',
      '/assets/30.webp',
    ],
    sections: [
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'Migsun Mixed Use' },
            { label: 'Type', value: 'Mixed-Use Complex' },
            { label: 'Location', value: 'Delhi NCR, India' },
            { label: 'Year', value: '2023' },
            { label: 'Status', value: 'Design Development' },
            { label: 'Area', value: '72,000 m²' },
          ],
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'Three Options',
          subtext: 'Each exploring a distinct architectural language',
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'Option 01',
          text: 'A clean, horizontal language with broad cantilevered overhangs creating sheltered streets at ground level.',
          images: [
            '/assets/6.webp',
            '/assets/18.webp',
          ],
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'Option 02',
          text: 'Towers articulated with deep-set vertical fins that bring rhythm and scale to the elevation.',
          images: [
            '/assets/30.webp',
            '/assets/6.webp',
          ],
        },
      },
      {
        type: 'TextRight',
        props: {
          heading: 'The Public Realm',
          text: `All three options share a commitment to quality public space, with a landscaped central plaza at the heart of the development.

The plaza is designed to be the social heart of the complex — a place for gathering, events, and everyday life.`,
        },
      },
    ],
  },
  {
    id: 'migsun-rohini',
    title: 'Migsun Rohini',
    location: 'Rohini, Delhi',
    year: '2022',
    type: 'Residential & Retail',
    status: 'Schematic Design',
    area: '38,000 m²',
    description: `A vibrant residential-led mixed-use development in one of Delhi's most established neighbourhoods. Migsun Rohini takes the familiar vernacular of Delhi housing and re-imagines it through a contemporary lens.

The project offers two design options: the first employs a restrained palette of white render and dark metal accents; the second introduces warm stone and terracotta tones that echo the local urban fabric. Both options prioritize generous balconies and communal terraces that extend living space outward.

Retail at the podium level is carefully calibrated to serve both residents and the wider neighbourhood, creating an active, engaged street edge that enlivens the public realm.`,
    coverImage: '/assets/7.webp',
    images: [
      '/assets/7.webp',
      '/assets/19.webp',
      '/assets/31.webp',
    ],
    sections: [
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'Migsun Rohini' },
            { label: 'Type', value: 'Residential & Retail' },
            { label: 'Location', value: 'Rohini, Delhi' },
            { label: 'Year', value: '2022' },
            { label: 'Status', value: 'Schematic Design' },
            { label: 'Area', value: '38,000 m²' },
          ],
        },
      },
      {
        type: 'ImageLeft',
        props: {
          src: '/assets/7.webp',
          alt: 'Migsun Rohini Option 1',
        },
      },
      {
        type: 'TextRight',
        props: {
          heading: 'Option 01',
          text: `A restrained palette of white render and dark metal accents. Generous balconies and communal terraces extend living space outward.

Retail at the podium level is carefully calibrated to serve both residents and the wider neighbourhood.`,
        },
      },
      {
        type: 'ImageRight',
        props: {
          src: '/assets/19.webp',
          alt: 'Migsun Rohini Option 2',
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'Option 02',
          subtext: 'Warm stone and terracotta tones that echo the local urban fabric',
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/31.webp',
          alt: 'Migsun Rohini street view',
          caption: 'Street-level retail activation — schematic design',
        },
      },
    ],
  },
  {
    id: 'noida-one',
    title: 'Noida One',
    location: 'Noida, India',
    year: '2021',
    type: 'Commercial Office',
    status: 'Completed',
    area: '41,000 m²',
    description: `A flagship commercial development that establishes a new identity for Noida's emerging business district. Noida One is designed as a single, coherent statement — a tower and podium ensemble that reads as one unified composition from every angle.

The tower's distinctive form is generated by the programmatic needs of the building: a generous entrance lobby opens onto a landscaped plaza, while the office floors above are planned for maximum flexibility and efficiency.

The facade system of high-performance glass and aluminium fins achieves thermal comfort while creating a shimmering, reflective quality that changes through the day as the sun moves across the sky.`,
    coverImage: '/assets/8.webp',
    images: [
      '/assets/8.webp',
      '/assets/20.webp',
      '/assets/32.webp',
    ],
    sections: [
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'Noida One' },
            { label: 'Type', value: 'Commercial Office' },
            { label: 'Location', value: 'Noida, India' },
            { label: 'Year', value: '2021' },
            { label: 'Status', value: 'Completed' },
            { label: 'Area', value: '41,000 m²' },
          ],
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: 'One Coherent Statement',
          subtext: 'Commercial Office · Noida · Completed 2021',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/8.webp',
          alt: 'Noida One tower',
          heading: 'Identity',
          text: `A flagship commercial development that establishes a new identity for Noida's emerging business district. Noida One is designed as a single, coherent statement — a tower and podium ensemble.

The tower's distinctive form is generated by the programmatic needs of the building, with a generous entrance lobby opening onto a landscaped plaza.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/20.webp',
          alt: 'Noida One facade detail',
          caption: 'Facade detail — completed',
        },
      },
      {
        type: 'ImageRight',
        props: {
          src: '/assets/32.webp',
          alt: 'Noida One night view',
        },
      },
    ],
  },
  {
    id: 'omaxe-mall',
    title: 'Omaxe Mall',
    location: 'India',
    year: '2023',
    type: 'Retail & Entertainment',
    status: 'Design Development',
    area: '95,000 m²',
    description: `An ambitious retail and entertainment destination that reimagines the mall typology for a new generation. Omaxe Mall is conceived as an urban hub — a place where shopping, dining, culture, and leisure converge in a single, vibrant complex.

The design employs a bold, angular form that creates dramatic public spaces at the heart of the mall. A central atrium rises the full height of the building, flooded with natural light and animated by bridges, terraces, and planting.

The mall's anchors — cinema, food hall, department store — are positioned to draw visitors through the full extent of the building, encouraging exploration and discovery at every turn.`,
    coverImage: '/assets/9.webp',
    images: [
      '/assets/9.webp',
      '/assets/21.webp',
    ],
    sections: [
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'Omaxe Mall' },
            { label: 'Type', value: 'Retail & Entertainment' },
            { label: 'Location', value: 'India' },
            { label: 'Year', value: '2023' },
            { label: 'Status', value: 'Design Development' },
            { label: 'Area', value: '95,000 m²' },
          ],
        },
      },
      {
        type: 'ImageCentreWithHeading',
        props: {
          heading: 'An Urban Hub',
          src: '/assets/9.webp',
          alt: 'Omaxe Mall exterior',
          caption: 'Exterior view — design development',
        },
      },
      {
        type: 'TextRight',
        props: {
          heading: 'The Atrium',
          text: `A central atrium rises the full height of the building, flooded with natural light and animated by bridges, terraces, and planting.

The mall's anchors — cinema, food hall, department store — are positioned to draw visitors through the full extent of the building.`,
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'Design Options',
          text: 'Two design options — each offering a distinct architectural character while sharing the same bold urban ambition.',
          images: [
            '/assets/9.webp',
            '/assets/21.webp',
          ],
        },
      },
    ],
  },
  {
    id: 'pentagon',
    title: 'Pentagon',
    location: 'India',
    year: '2022',
    type: 'Office Campus',
    status: 'Concept Design',
    area: '33,000 m²',
    description: `A corporate campus that reinterprets the office building as an expressive, identity-driven work environment. Pentagon draws its name from the geometric logic that underlies its plan — a five-sided form that creates a dynamic courtyard at its centre.

The courtyard is the heart of the project: a sheltered, landscaped space that serves as an informal meeting place, a venue for events, and a breath of green in a dense urban environment. The office wings that surround it are designed for collaborative, agile working, with open floor plates that can be configured for a variety of uses.

The building's exterior is clad in a sinuous pattern of perforated metal panels, creating a facade that is simultaneously functional — shading and screening the interior — and expressive, giving the campus a distinctive visual identity.`,
    coverImage: '/assets/10.webp',
    images: [
      '/assets/10.webp',
      '/assets/22.webp',
    ],
    sections: [
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'Pentagon' },
            { label: 'Type', value: 'Office Campus' },
            { label: 'Location', value: 'India' },
            { label: 'Year', value: '2022' },
            { label: 'Status', value: 'Concept Design' },
            { label: 'Area', value: '33,000 m²' },
          ],
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'The Pentagon',
          subtext: 'Five sides, one courtyard, infinite possibility',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/10.webp',
          alt: 'Pentagon aerial view',
          heading: 'The Courtyard',
          text: `The courtyard is the heart of the project: a sheltered, landscaped space that serves as an informal meeting place, a venue for events, and a breath of green in a dense urban environment.

The office wings that surround it are designed for collaborative, agile working.`,
        },
      },
      {
        type: 'ImageRight',
        props: {
          src: '/assets/22.webp',
          alt: 'Pentagon facade',
        },
      },
    ],
  },
  {
    id: 'rsp',
    title: 'RSP Mall',
    location: 'India',
    year: '2022',
    type: 'Retail Complex',
    status: 'Design Development',
    area: '68,000 m²',
    description: `A large-scale retail complex that integrates seamlessly into an existing urban fabric. RSP Mall takes the form of a continuous, animated street — a covered public realm that invites the city to pass through as much as to shop within.

The design eschews the inward-looking mall model in favour of a porous, outward-facing configuration. Shop fronts line both sides of a generous, naturally ventilated galleria, with skylights and openings that bring daylight and air movement throughout.

Anchor tenants at either end of the galleria create the footfall that animates the in-between retail units, while a food and beverage level above adds an additional layer of activity and views out across the city.`,
    coverImage: '/assets/11.webp',
    images: [
      '/assets/11.webp',
      '/assets/23.webp',
    ],
    sections: [
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'RSP Mall' },
            { label: 'Type', value: 'Retail Complex' },
            { label: 'Location', value: 'India' },
            { label: 'Year', value: '2022' },
            { label: 'Status', value: 'Design Development' },
            { label: 'Area', value: '68,000 m²' },
          ],
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: 'The Animated Street',
          subtext: 'A covered public realm open to the city',
        },
      },
      {
        type: 'ImageLeft',
        props: {
          src: '/assets/11.webp',
          alt: 'RSP Mall street view',
        },
      },
      {
        type: 'TextRight',
        props: {
          heading: 'The Galleria',
          text: `Shop fronts line both sides of a generous, naturally ventilated galleria, with skylights and openings that bring daylight and air movement throughout.

Anchor tenants at either end create the footfall that animates the in-between retail units.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/23.webp',
          alt: 'RSP Mall interior',
          caption: 'Galleria interior — design development',
        },
      },
    ],
  },
  {
    id: 'the-white-house',
    title: 'The White House',
    location: 'India',
    year: '2021',
    type: 'Residential',
    status: 'Concept Design',
    area: '1,200 m²',
    description: `An intimate residential project that explores the archetype of the white house — pure form, clean geometry, and a luminous presence in the landscape. The White House is an exercise in restraint: a building of minimal means that achieves maximum spatial richness.

The plan is organised around a sequence of courtyards that bring light and air deep into the house, dissolving the boundary between interior and exterior. Each space is precisely calibrated to its use, with proportions and orientations chosen to create the ideal conditions for daily life.

Materials are limited to a single palette — white render, raw concrete, and timber — allowing the quality of light and space to dominate. The result is a house that feels simultaneously simple and profound.`,
    coverImage: '/assets/12.webp',
    images: [
      '/assets/12.webp',
      '/assets/24.webp',
    ],
    sections: [
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'The White House' },
            { label: 'Type', value: 'Residential' },
            { label: 'Location', value: 'India' },
            { label: 'Year', value: '2021' },
            { label: 'Status', value: 'Concept Design' },
            { label: 'Area', value: '1,200 m²' },
          ],
        },
      },
      {
        type: 'HeadingLeft',
        props: {
          heading: 'An Exercise in Restraint',
          subtext: 'Pure form, clean geometry, luminous presence',
        },
      },
      {
        type: 'ImageLeftTextRight',
        props: {
          src: '/assets/12.webp',
          alt: 'The White House exterior',
          heading: 'The Courtyard House',
          text: `The plan is organised around a sequence of courtyards that bring light and air deep into the house, dissolving the boundary between interior and exterior.

Materials are limited to a single palette — white render, raw concrete, and timber — allowing the quality of light and space to dominate.`,
        },
      },
      {
        type: 'ImageCentreWithHeading',
        props: {
          heading: 'Interior',
          src: '/assets/24.webp',
          alt: 'The White House interior',
          caption: 'Living space — concept design',
        },
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
  img18: 'migsun-mixed-use',
  img19: 'migsun-rohini',
  img20: 'noida-one',
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
