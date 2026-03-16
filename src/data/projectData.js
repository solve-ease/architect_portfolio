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
    coverImage: '/assets/architect_images_webp_reduced/Renders for website/Conventional centger/04-05_Thesis page_01 copy.webp',
    images: [
      '/assets/architect_images_webp_reduced/Renders for website/Conventional centger/04-05_Thesis page_01 copy.webp',
      '/assets/architect_images_webp_reduced/Renders for website/Conventional centger/Thesis  (1).webp',
      '/assets/architect_images_webp_reduced/Renders for website/Conventional centger/Untitled-1 copy.webp',
    ],
    // sections defines the ordered list of composable section components for this project
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
          src: '/assets/architect_images_webp_reduced/Renders for website/Conventional centger/Thesis  (1).webp',
          alt: 'Conventional Center interior view',
          heading: 'Concept',
          text: `A bold civic landmark designed to redefine public assembly in an urban context. The Conventional Center brings together form and function through a seamless interplay of structure and space.

The design philosophy centers on creating a porous, light-filled environment that invites the city in while maintaining a strong architectural identity.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/architect_images_webp_reduced/Renders for website/Conventional centger/Untitled-1 copy.webp',
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
          src: '/assets/architect_images_webp_reduced/Renders for website/Conventional centger/04-05_Thesis page_01 copy.webp',
          alt: 'Conventional Center facade',
        },
      },
    ],
  },
  {
    id: 'evolo',
    title: 'Evolo',
    location: 'India',
    year: '2022',
    type: 'Mixed-Use Tower',
    status: 'Competition Entry',
    area: '62,000 m²',
    description: `An exploration of vertical living at its most ambitious. Evolo proposes a tower that dissolves the boundary between built form and landscape, creating a continuous cascade of inhabited terraces.

Each floor plate steps back incrementally, carving out generous sky gardens that bring nature into the heart of urban density. The facade responds dynamically to solar orientation, opening where shade is needed and closing to create thermal comfort.

This competition entry challenges conventional tower typologies, offering a vision of the skyscraper as a living, breathing ecosystem above the city.`,
    coverImage: '/assets/architect_images_webp_reduced/Renders for website/Evolo/CloseUp.webp',
    images: [
      '/assets/architect_images_webp_reduced/Renders for website/Evolo/CloseUp.webp',
      '/assets/architect_images_webp_reduced/Renders for website/Evolo/EVOLO SHEET 01 copy.webp',
      '/assets/architect_images_webp_reduced/Renders for website/Evolo/Final 2.webp',
    ],
    sections: [
      {
        type: 'KeyInfo',
        props: {
          items: [
            { label: 'Project', value: 'Evolo' },
            { label: 'Type', value: 'Mixed-Use Tower' },
            { label: 'Location', value: 'India' },
            { label: 'Year', value: '2022' },
            { label: 'Status', value: 'Competition Entry' },
            { label: 'Area', value: '62,000 m²' },
          ],
        },
      },
      {
        type: 'HeadingRight',
        props: {
          heading: 'Vertical Living Redefined',
          subtext: 'Mixed-Use Tower · Competition Entry · 2022',
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'Concept',
          text: `An exploration of vertical living at its most ambitious. Evolo proposes a tower that dissolves the boundary between built form and landscape, creating a continuous cascade of inhabited terraces.

Each floor plate steps back incrementally, carving out generous sky gardens that bring nature into the heart of urban density.`,
          images: [
            '/assets/architect_images_webp_reduced/Renders for website/Evolo/EVOLO SHEET 01 copy.webp',
            '/assets/architect_images_webp_reduced/Renders for website/Evolo/Final 2.webp',
          ],
        },
      },
      {
        type: 'ImageCentreWithHeading',
        props: {
          heading: 'The Tower',
          src: '/assets/architect_images_webp_reduced/Renders for website/Evolo/CloseUp.webp',
          alt: 'Evolo tower close-up',
          caption: 'Tower elevation — competition render',
        },
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
    coverImage: '/assets/architect_images_webp_reduced/Renders for website/GPM Retail/F1.webp',
    images: [
      '/assets/architect_images_webp_reduced/Renders for website/GPM Retail/F1.webp',
      '/assets/architect_images_webp_reduced/Renders for website/GPM Retail/f3.webp',
      '/assets/architect_images_webp_reduced/Renders for website/GPM Retail/f5.webp',
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
          src: '/assets/architect_images_webp_reduced/Renders for website/GPM Retail/F1.webp',
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
          src: '/assets/architect_images_webp_reduced/Renders for website/GPM Retail/f3.webp',
          alt: 'GPM Retail courtyard',
          caption: 'Central courtyard — design development',
        },
      },
      {
        type: 'ImageLeft',
        props: {
          src: '/assets/architect_images_webp_reduced/Renders for website/GPM Retail/f5.webp',
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
    coverImage: '/assets/architect_images_webp_reduced/Renders for website/M3m/Final 1.webp',
    images: [
      '/assets/architect_images_webp_reduced/Renders for website/M3m/Final 1.webp',
      '/assets/architect_images_webp_reduced/Renders for website/M3m/Scene 12.webp',
      '/assets/architect_images_webp_reduced/Renders for website/M3m/Scene 16.webp',
      '/assets/architect_images_webp_reduced/Renders for website/M3m/Scene 22.webp',
      '/assets/architect_images_webp_reduced/Renders for website/M3m/Commercail (3).webp',
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
          heading: 'A New Benchmark for Luxury',
          subtext: 'Luxury Mixed-Use · Gurugram · 2023',
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'Master Plan',
          text: `The master plan arranges towers around a series of landscape gardens, allowing every residence to connect visually and physically with green space.

The commercial podium activates the street edge with a varied retail frontage that encourages pedestrian life.`,
          images: [
            '/assets/architect_images_webp_reduced/Renders for website/M3m/Scene 12.webp',
            '/assets/architect_images_webp_reduced/Renders for website/M3m/Scene 16.webp',
            '/assets/architect_images_webp_reduced/Renders for website/M3m/Scene 22.webp',
          ],
        },
      },
      {
        type: 'ImageRight',
        props: {
          src: '/assets/architect_images_webp_reduced/Renders for website/M3m/Commercail (3).webp',
          alt: 'M3M commercial podium',
        },
      },
      {
        type: 'ImageCentreWithHeading',
        props: {
          heading: 'Materials & Identity',
          src: '/assets/architect_images_webp_reduced/Renders for website/M3m/Final 1.webp',
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
    coverImage: '/assets/architect_images_webp_reduced/Renders for website/Migsun Lucknow/Cover Page.webp',
    images: [
      '/assets/architect_images_webp_reduced/Renders for website/Migsun Lucknow/Cover Page.webp',
      '/assets/architect_images_webp_reduced/Renders for website/Migsun Lucknow/Mixed Use- luknow (2).webp',
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
          src: '/assets/architect_images_webp_reduced/Renders for website/Migsun Lucknow/Cover Page.webp',
          alt: 'Migsun Lucknow overview',
          heading: 'Heritage & Modernity',
          text: `A transformative mixed-use development for one of India's most culturally rich cities. Migsun Lucknow draws inspiration from the city's Nawabi heritage while projecting a thoroughly contemporary vision.

The project weaves traditional spatial sequences — gated courtyards, shaded verandahs, layered facades — into a modern programme of housing, retail, and hospitality.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/architect_images_webp_reduced/Renders for website/Migsun Lucknow/Mixed Use- luknow (2).webp',
          alt: 'Migsun Lucknow landscape',
          caption: 'Central green spine — schematic design',
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
    coverImage: '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op1/1 copy.webp',
    images: [
      '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op1/1 copy.webp',
      '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op1/5.webp',
      '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op2/F2.webp',
      '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op2/f6.webp',
      '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op3/2 copy.webp',
      '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op3/4 copy.webp',
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
            '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op1/1 copy.webp',
            '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op1/5.webp',
          ],
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'Option 02',
          text: 'Towers articulated with deep-set vertical fins that bring rhythm and scale to the elevation.',
          images: [
            '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op2/F2.webp',
            '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op2/f6.webp',
          ],
        },
      },
      {
        type: 'Slider',
        props: {
          heading: 'Option 03',
          text: 'A more fluid approach with curved facades that soften the urban edge.',
          images: [
            '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op3/2 copy.webp',
            '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op3/4 copy.webp',
          ],
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
    coverImage: '/assets/architect_images_webp_reduced/Renders for website/Migsun rohini/op1/Cover Image.webp',
    images: [
      '/assets/architect_images_webp_reduced/Renders for website/Migsun rohini/op1/Cover Image.webp',
      '/assets/architect_images_webp_reduced/Renders for website/Migsun rohini/op1/2.webp',
      '/assets/architect_images_webp_reduced/Renders for website/Migsun rohini/op2/Mixed Use (3)_Bloom.webp',
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
          src: '/assets/architect_images_webp_reduced/Renders for website/Migsun rohini/op1/Cover Image.webp',
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
          src: '/assets/architect_images_webp_reduced/Renders for website/Migsun rohini/op2/Mixed Use (3)_Bloom.webp',
          alt: 'Migsun Rohini Option 2',
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
    coverImage: '/assets/architect_images_webp_reduced/Renders for website/Noida one/Noida One (1).webp',
    images: [
      '/assets/architect_images_webp_reduced/Renders for website/Noida one/Noida One (1).webp',
      '/assets/architect_images_webp_reduced/Renders for website/Noida one/Noida One (2).webp',
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
          src: '/assets/architect_images_webp_reduced/Renders for website/Noida one/Noida One (1).webp',
          alt: 'Noida One tower',
          heading: 'Identity',
          text: `A flagship commercial development that establishes a new identity for Noida's emerging business district. Noida One is designed as a single, coherent statement — a tower and podium ensemble.

The tower's distinctive form is generated by the programmatic needs of the building, with a generous entrance lobby opening onto a landscaped plaza.`,
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/architect_images_webp_reduced/Renders for website/Noida one/Noida One (2).webp',
          alt: 'Noida One facade detail',
          caption: 'Facade detail — completed',
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
    coverImage: '/assets/architect_images_webp_reduced/Renders for website/Omaxe mall/op1/Final_02_op2.webp',
    images: [
      '/assets/architect_images_webp_reduced/Renders for website/Omaxe mall/op1/Final_02_op2.webp',
      '/assets/architect_images_webp_reduced/Renders for website/Omaxe mall/op1/Final_05_op2.webp',
      '/assets/architect_images_webp_reduced/Renders for website/Omaxe mall/op2/Final 01.webp',
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
          src: '/assets/architect_images_webp_reduced/Renders for website/Omaxe mall/op1/Final_02_op2.webp',
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
            '/assets/architect_images_webp_reduced/Renders for website/Omaxe mall/op1/Final_05_op2.webp',
            '/assets/architect_images_webp_reduced/Renders for website/Omaxe mall/op2/Final 01.webp',
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
    coverImage: '/assets/architect_images_webp_reduced/Renders for website/Pentagon/Image(1)_style_transfer01 copy.webp',
    images: [
      '/assets/architect_images_webp_reduced/Renders for website/Pentagon/Image(1)_style_transfer01 copy.webp',
      '/assets/architect_images_webp_reduced/Renders for website/Pentagon/Scene 1(1)_style_transfer01 copy.webp',
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
          src: '/assets/architect_images_webp_reduced/Renders for website/Pentagon/Image(1)_style_transfer01 copy.webp',
          alt: 'Pentagon aerial view',
          heading: 'The Courtyard',
          text: `The courtyard is the heart of the project: a sheltered, landscaped space that serves as an informal meeting place, a venue for events, and a breath of green in a dense urban environment.

The office wings that surround it are designed for collaborative, agile working.`,
        },
      },
      {
        type: 'ImageRight',
        props: {
          src: '/assets/architect_images_webp_reduced/Renders for website/Pentagon/Scene 1(1)_style_transfer01 copy.webp',
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
    coverImage: '/assets/architect_images_webp_reduced/Renders for website/Rsp/Scene 13.webp',
    images: [
      '/assets/architect_images_webp_reduced/Renders for website/Rsp/Scene 13.webp',
      '/assets/architect_images_webp_reduced/Renders for website/Rsp/Scene 24.webp',
      '/assets/architect_images_webp_reduced/Renders for website/Rsp/RSP Mall_0p1_ (4).webp',
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
          src: '/assets/architect_images_webp_reduced/Renders for website/Rsp/Scene 13.webp',
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
          src: '/assets/architect_images_webp_reduced/Renders for website/Rsp/RSP Mall_0p1_ (4).webp',
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
    coverImage: '/assets/architect_images_webp_reduced/Renders for website/The White house/The White House (1) COVER IMAGE.webp',
    images: [
      '/assets/architect_images_webp_reduced/Renders for website/The White house/The White House (1) COVER IMAGE.webp',
      '/assets/architect_images_webp_reduced/Renders for website/The White house/The White House (2).webp',
      '/assets/architect_images_webp_reduced/Renders for website/The White house/The White House (3).webp',
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
          src: '/assets/architect_images_webp_reduced/Renders for website/The White house/The White House (1) COVER IMAGE.webp',
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
          src: '/assets/architect_images_webp_reduced/Renders for website/The White house/The White House (2).webp',
          alt: 'The White House interior',
          caption: 'Living space — concept design',
        },
      },
      {
        type: 'ImageCentre',
        props: {
          src: '/assets/architect_images_webp_reduced/Renders for website/The White house/The White House (3).webp',
          alt: 'The White House courtyard',
          caption: 'Courtyard — concept design',
        },
      },
    ],
  },
];

// Map from imageKey to projectId
export const imageKeyToProject = {
  conv1: 'conventional-center',
  conv2: 'conventional-center',
  conv3: 'conventional-center',
  evolo1: 'evolo',
  evolo2: 'evolo',
  evolo3: 'evolo',
  gpm1: 'gpm-retail',
  gpm2: 'gpm-retail',
  gpm3: 'gpm-retail',
  m3m1: 'm3m',
  m3m2: 'm3m',
  m3m3: 'm3m',
  m3m4: 'm3m',
  m3m5: 'm3m',
  migLuck1: 'migsun-lucknow',
  migLuck2: 'migsun-lucknow',
  migMix1: 'migsun-mixed-use',
  migMix2: 'migsun-mixed-use',
  migMix3: 'migsun-mixed-use',
  migMix4: 'migsun-mixed-use',
  migMix5: 'migsun-mixed-use',
  migMix6: 'migsun-mixed-use',
  migRoh1: 'migsun-rohini',
  migRoh2: 'migsun-rohini',
  migRoh3: 'migsun-rohini',
  noida1: 'noida-one',
  noida2: 'noida-one',
  omaxe1: 'omaxe-mall',
  omaxe2: 'omaxe-mall',
  omaxe3: 'omaxe-mall',
  pent1: 'pentagon',
  pent2: 'pentagon',
  rsp1: 'rsp',
  rsp2: 'rsp',
  rsp3: 'rsp',
  white1: 'the-white-house',
  white2: 'the-white-house',
  white3: 'the-white-house',
};

export default projectData;
