const SERVICES_DATA = {

  photography: [

    {

      id: 'photo_signature',

      name: 'Signature',

      price: 2195,

      features: [

        'One professional photographer for 6 hours',

        'Up to 800 images all edited for color and exposure',

        'Signature release of all images',

        'Online photo gallery to order prints & download with social media sharing'

      ]

    },

    {

      id: 'photo_plus',

      name: 'Signature Plus',

      price: 2895,

      features: [

        'Lead photographer for 8 hours',

        'Up to 800 fully edited images',

        'Signature release of all images',

        'Online photo gallery to order prints & download with social media sharing'

      ]

    },

    {

      id: 'photo_premium',

      name: 'Premium',

      price: 3695,

      features: [

        'Lead photographer for 8 hours',

        'Up to 1,200 fully edited images',

        '10x10 Seamless BindBook',

        'Engagement Shoot (Up to 200 Images) 1 Hour',

        'Second Photographer 4 Hours',

        'Rush Order Processing (4 Week Turnaround)'

      ]

    }

  ],

  videography: [

    {

      id: 'video_signature',

      name: 'Signature',

      price: 1895,

      features: [

        'Lead videographer for 6 hours',

        'Cinematic HD highlight film, including audio from vows and toasts',

        '30-second social-media sizzle reel',

        'Full coverage of vows and toasts'

      ]

    },

    {

      id: 'video_plus',

      name: 'Signature Plus',

      price: 2595,

      features: [

        'Lead videographer for 8 hours',

        'Cinematic HD highlight film, complete audio mix',

        '30-second social-media sizzle reel',

        'Full coverage of vows, toasts, and spotlight dances'

      ]

    },

    {

      id: 'video_premium',

      name: 'Premium',

      price: 4195,

      features: [

        'Lead videographer for 8 hours',

        'Cinematic HD highlight film (6+ minutes)',

        '30-second social-media sizzle reel',

        'Full ceremony coverage',

        'Full spotlight dances',

        'Drone footage',

        'Rush order processing (4-week turnaround)'

      ]

    }

  ],

  DJ: [

    {

      id: 'dj_signature',

      name: 'Signature',

      price: 1495,

      features: [

        'DJ/MC for 5 hours',

        'Wireless hand-held microphone',

        'LED dance-floor lighting',

        'Set-up and teardown on our time (no extra fee)'

      ]

    },

    {

      id: 'dj_plus',

      name: 'Signature Plus',

      price: 1845,

      features: [

        'DJ/MC for 7 hours (includes ceremony + cocktail + reception)',

        'Wireless hand-held microphone',

        'LED dance-floor lighting',

        'Ceremony coverage (wireless mic + speaker) (Same Venue Only)',

        'Audio guest book (digital recording station)'

      ]

    },

    {

      id: 'dj_premium',

      name: 'Premium',

      price: 2195,

      features: [

        'DJ/MC for 8 hours (full day)',

        'Wireless hand-held microphone',

        'LED dance-floor lighting & uplighting (up to 8 lights)',

        'Ceremony coverage (wireless mic + speaker)',

        'Cold Spark Fountain - $500 Value',

        'Choice of DJ (subject to availability)'

      ]

    }

  ],

  photo_booth: [

    {

      id: 'booth_signature',

      name: 'Signature',

      price: 745,

      features: [

        'One self service photo booth for 4 hours',

        'Unlimited photo captures (digital)',

        'Digital Delivery of All Images'

      ]

    },

    {

      id: 'booth_plus',

      name: 'Signature Plus',

      price: 945,

      features: [

        'On-site attendant for 4 hours',

        'Unlimited photo captures (digital & physical prints)',

        'Digital props and backdrops',

        'Customizable photo strips',

        'Boomerang, GIF, and video-capture options',

        'Online gallery of all captures'

      ]

    },

    {

      id: 'booth_premium',

      name: 'Premium',

      price: 1145,

      features: [

        'On-site attendant for 6 hours',

        'Unlimited photo captures (digital & physical prints)',

        'Digital props and backdrops',

        'Customizable photo strips',

        'Boomerang, GIF, and video-capture options',

        'Instant print-outs (printed strips on site)',

        'Online gallery of all captures'

      ]

    }

  ],

  coordination: [

    {

      id: 'coord_signature',

      name: 'Signature',

      price: 1595,

      features: [

        'Coordinator for 6 hours on wedding day',

        'Wedding-day emergency kit',

        'Unlimited phone & email communication from booking date',

        'Etiquette and protocol advising',

        'Bouquet, boutonniere, & corsage management',

        'Day-of timeline creation and execution',

        'Vendor referrals and day-of communication'

      ]

    },

    {

      id: 'coord_plus',

      name: 'Signature Plus',

      price: 2145,

      features: [

        'Coordinator for 8 hours on wedding day',

        'Wedding-day emergency kit',

        'Unlimited phone & email communication from booking date',

        'Etiquette and protocol advising',

        'Bouquet, boutonniere, & corsage management',

        'Day-of timeline creation and execution',

        'Vendor referrals and day-of communication',

        'Decor setup and teardown'

      ]

    },

    {

      id: 'coord_premium',

      name: 'Premium',

      price: 2695,

      features: [

        'Coordinator for 10 hours on wedding day',

        'Wedding-day emergency kit',

        'Unlimited phone & email communication from booking date',

        'Etiquette and protocol advising',

        'Bouquet, boutonniere, & corsage management',

        'Day-of timeline creation and execution',

        'Vendor referrals and day-of communication',

        'Decor setup and teardown',

        'Rehearsal management (processional & recessional; up to 1 hour)'

      ]

    }

  ]

};



const ADDONS_DATA = {

  photography: [

    { id: 'photo_extra_hour', name: 'Additional hour of coverage', description: 'Extend your photography coverage', price: 300 },

    { id: 'photo_engagement', name: 'Engagement session', description: 'Up to 1 hour, 200 images', price: 500 },

    { id: 'photo_second', name: 'Second photographer', description: '4 hours, up to 400 additional images', price: 800 },

    { id: 'photo_rush', name: 'Rush order processing', description: '4-week turnaround', price: 500 },

    { id: 'photo_wall', name: '20" × 30" wall portrait', description: 'Premium wall art', price: 350 },

    { id: 'photo_book', name: '10" × 10" seamless-bound photo book', description: 'Premium photo book', price: 600 },

    { id: 'photo_album', name: '10" × 10" metal-cover album', description: 'Luxury photo album', price: 1000 }

  ],

  videography: [

    { id: 'video_extra_hour', name: 'Additional hour of coverage', description: 'Extend your videography coverage', price: 300 },

    { id: 'video_drone', name: 'Drone footage', description: 'Aerial shots of your venue and ceremony', price: 500 },

    { id: 'video_ceremony', name: 'Full ceremony edit', description: 'Complete ceremony footage edited', price: 400 },

    { id: 'video_love_story', name: '"Love Story" video vignette', description: 'Personalized love story video', price: 795 },

    { id: 'video_second', name: 'Second videographer', description: '4 hours of additional coverage', price: 1200 }

  ],

  DJ: [

    { id: 'dj_extra_half', name: 'Additional half-hour of service', description: 'Extend your DJ coverage', price: 125 },

    { id: 'dj_uplights', name: 'Uplights (8 additional LED uplights)', description: 'Enhanced lighting package', price: 395 },

    { id: 'dj_audio_book', name: 'Audio guest book (standalone)', description: 'Digital recording station', price: 200 },

    { id: 'dj_specific', name: 'Specific DJ request', description: 'DJ of your choice', price: 300 }

  ],

  photo_booth: [

    { id: 'booth_extra_hour', name: 'Additional hour of service', description: 'Extend your photo booth time', price: 200 },

    { id: 'booth_virtual', name: 'Virtual photo booth', description: 'Digital photo booth experience', price: 150 },

    { id: 'booth_prints', name: 'Add physical prints', description: 'Up to 300 prints', price: 200 }

  ],

  coordination: [

    { id: 'coord_rental', name: 'Rental returns (local only)', description: 'We handle rental returns', price: 200 },

    { id: 'coord_tuxedo', name: 'Tuxedo returns (local only)', description: 'We handle tuxedo returns', price: 200 },

    { id: 'coord_extra_hour', name: 'Additional hour of coordination', description: 'Extra coordination time', price: 250 },

    { id: 'coord_decor_setup', name: 'Decor setup or teardown (per hour)', description: 'Professional decor handling', price: 100 },

    { id: 'coord_rehearsal', name: 'Rehearsal management extension', description: 'Extended rehearsal coordination', price: 250 }

  ]

};




