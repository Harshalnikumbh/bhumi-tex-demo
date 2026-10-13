// Photos generated in Higgsfield for this demo. To host them yourself, put the files in
// /public/img/ and change the URLs below to '/img/<name>.png'.
const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3Ezd9z9iL3ejx5tRZZMG61PIKHS/';
export const IMG = {
  factory: CDN + 'hf_20261013_124015_3a98b567-2dfc-43f7-af7d-b2b6ad8ed938.png',
  cones: CDN + 'hf_20261013_123803_599b9a68-ddfd-4b58-bbec-e6a7271b02b3.png',
  fabrics: CDN + 'hf_20261013_123803_e3638bc6-a1d4-443b-982c-11c9e663010c.png',
  looms: CDN + 'hf_20261013_124014_5ececa25-d0e3-4b9c-b70f-f8fd9c125158.png',
  bobbin: CDN + 'hf_20261013_123803_40ceb449-190c-4074-93ed-80963a08a993.png',
  plant: CDN + 'hf_20261013_124029_b7368288-a21c-46dc-aff0-11262a32ea61.png',
  export: CDN + 'hf_20261013_123804_2ba4c48f-0a23-41e3-b2c9-d0f08976fc22.png',
  qc: CDN + 'hf_20261013_124031_2437e835-9dc0-4e1d-a3c3-c4072e741561.png'
};

export const COMPANY = {
  name: 'Bhumi Tex Industries Pvt. Ltd.',
  email: 'bhumi@bhumitex.com',
  website: 'www.bhumitex.com',
  address: 'Unit No. 06/07, Peninsula Centre, Dr. S.S. Rao Road, Parel (East), Mumbai, Maharashtra 400012'
};

export const STATS = [
  { value: 40000, suffix: ' TPA', label: 'Texturised yarn capacity' },
  { value: 25, suffix: '+', label: 'Export countries' },
  { value: 3, suffix: '', label: 'Automated units, Silvassa' },
  { value: 1200, suffix: '', label: 'Shuttle looms, Bhiwandi' }
];

// Fallback copies (the Flask API serves the same data at /api/products and /api/yarns)
export const PRODUCTS = [
  { id: 'dty', title: 'Polyester Texturised Yarn', label: 'DTY / PTY', image: 'factory', description: 'Draw textured yarn from POY for suiting, shirting, dress materials, saris, hosiery and knitted fabrics.', specs: [['Capacity', '~40,000 tonnes per annum, 3 units'], ['Process', 'Draw texturising of POY with intermingling'], ['End use', 'Suiting, shirting, dress materials, saris, hosiery, knitted fabrics'], ['Export', '25+ countries']] },
  { id: 'aty', title: 'Air Texturised Yarn', label: 'ATY', image: 'bobbin', description: 'Mechanically bulked with a cold-air stream — the touch and warmth of cotton with the strength of polyester.', specs: [['Types', 'Air covered yarn (polyester & nylon filament)'], ['Count range', '60 Denier – 450 Denier'], ['Luster', 'Semi Dull, Full Dull, Bright'], ['End use', 'Knitting & weaving']] },
  { id: 'twisted', title: 'Twisted Yarn', label: '2,500 TPA', image: 'qc', description: 'Precision twisted yarns for zipper fasteners, curtains, industrial cloth and fancy yarns for high-value dress materials.', specs: [['Capacity', '2,500 tonnes per annum'], ['End use', 'Zippers, curtains, industrial fabrics, upholstery']] },
  { id: 'lycra', title: 'Lycra Cover Yarn', label: 'Stretch', image: 'cones', description: 'Spandex covered yarns that bring comfort stretch to sportswear, ladies wear and hosiery.', specs: [['Construction', 'Spandex core with filament cover'], ['End use', 'Sportswear, hosiery, ladies wear']] },
  { id: 'knit', title: 'Knitted Fabrics', label: 'Up to 36"', image: 'fabrics', description: 'Circular knit polyester fabrics on Taiwan-made Fukuhama machines, exported around the globe.', specs: [['Fabric', '100% polyester base, with / without spandex'], ['Count range', '60 – 150 Denier (DTY & poly spun)'], ['Knit type', 'Interlock & Sinker'], ['Width', 'Up to 36 inches, various GSM'], ['End use', 'Menswear, ladies wear, baby wear, sportswear']] },
  { id: 'weave', title: 'Weaving Fabrics', label: '1,200 looms', image: 'looms', description: 'PC, PV and 100% cotton fabrics woven on 1,200 shuttle looms in Bhiwandi, Maharashtra.', specs: [['Looms', '1,200 shuttle looms, Bhiwandi'], ['Fabrics', 'PC, PV, 100% cotton'], ['Market', 'Domestic & export']] }
];

export const YARNS = [
  { machine: 'Open End Yarn', type: '100% Cotton Carded', count: 'Ne 6/1 – Ne 24/1' },
  { machine: 'Open End Yarn', type: 'Synthetic & Blended', count: 'Ne 6/1 – Ne 30/1' },
  { machine: 'Ring Spun Yarn', type: '100% Cotton Carded', count: 'Ne 8/1 – Ne 60/1' },
  { machine: 'Ring Spun Yarn', type: '100% Cotton Combed', count: 'Ne 10/1 – Ne 100/1' },
  { machine: 'Ring Spun Yarn', type: '100% Cotton Compact', count: 'Ne 30/1 – Ne 120/1' },
  { machine: 'Ring Spun Yarn', type: '100% Polyester Spun', count: 'Ne 20/1 – Ne 80/1' },
  { machine: 'Ring Spun Yarn', type: '100% Viscose Spun', count: 'Ne 20/1 – Ne 40/1' },
  { machine: 'Ring Spun Yarn', type: 'Poly–Cotton Blended', count: 'Ne 20/1 – Ne 80/1' },
  { machine: 'Ring Spun Yarn', type: 'Poly–Viscose Blended', count: 'Ne 20/1 – Ne 80/1' },
  { machine: 'TFO Yarn', type: '100% Cotton Carded', count: 'Ne 8/2 – Ne 60/2' },
  { machine: 'TFO Yarn', type: '100% Cotton Combed', count: 'Ne 10/2 – Ne 100/2' },
  { machine: 'TFO Yarn', type: '100% Cotton Compact', count: 'Ne 30/2 – Ne 120/2' },
  { machine: 'TFO Yarn', type: 'Synthetic & Blended', count: 'Ne 20/2 – Ne 80/2' }
];

export const PROCESS = [
  { step: '01', title: 'POY intake', text: 'Partially oriented yarn from trusted spinners is tested for denier, tenacity and uniformity before it enters the line.', image: 'cones' },
  { step: '02', title: 'Draw texturising', text: 'High-speed texturising machines draw, twist and heat-set the yarn into bulky, elastic DTY — around 40,000 tonnes a year.', image: 'factory' },
  { step: '03', title: 'Air texturising & twisting', text: 'A cold-air stream creates ATY with millions of tiny loops; twisters add strength for zippers, curtains and industrial cloth.', image: 'bobbin' },
  { step: '04', title: 'Knitting & weaving', text: 'Circular knitting on Fukuhama machines and 1,200 shuttle looms in Bhiwandi turn yarn into finished fabric.', image: 'fabrics' },
  { step: '05', title: 'Quality lab', text: 'Every lot is checked for count, strength, shade and package build before it is packed.', image: 'qc' },
  { step: '06', title: 'Export', text: 'Cartons are palletised and containerised for buyers in 25+ countries.', image: 'export' }
];

export const FACILITIES = [
  { link: '#facilities', text: 'Silvassa — Unit I, II & III', image: 'plant' },
  { link: '#facilities', text: 'Texturising floor', image: 'factory' },
  { link: '#facilities', text: 'Bhiwandi weaving', image: 'looms' },
  { link: '#facilities', text: 'Quality lab', image: 'qc' }
];

export const COUNTRIES = [
  ['Bangladesh', 23.7, 90.4], ['Sri Lanka', 6.9, 79.9], ['UAE', 25.2, 55.3], ['Turkey', 41.0, 28.9], ['Egypt', 30.0, 31.2],
  ['Brazil', -23.5, -46.6], ['USA', 40.7, -74.0], ['UK', 51.5, -0.1], ['Italy', 45.5, 9.2], ['Germany', 50.1, 8.7],
  ['Poland', 52.2, 21.0], ['Morocco', 33.6, -7.6], ['Kenya', -1.3, 36.8], ['South Africa', -26.2, 28.0], ['Nigeria', 6.5, 3.4],
  ['Saudi Arabia', 24.7, 46.7], ['Iran', 35.7, 51.4], ['Vietnam', 10.8, 106.7], ['Indonesia', -6.2, 106.8], ['Mexico', 19.4, -99.1],
  ['Colombia', 4.7, -74.1], ['Argentina', -34.6, -58.4], ['Russia', 55.8, 37.6], ['Nepal', 27.7, 85.3], ['Ethiopia', 9.0, 38.7]
];
