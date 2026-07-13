export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "HouseList AI",
  slug: "houselist-ai",
  tagline: "MLS-ready listing descriptions that sell the home, not just describe it.",
  description: "Paste the beds, baths, location, and standout features and get a scannable, buyer-friendly listing description: a hook, the highlights, and a warm close - ready to post.",
  toolTitle: "Write a listing description",
  resultLabel: "Your listing description",
  ctaLabel: "Write listing",
  features: [
  "Hook + highlights",
  "Feature-to-benefit framing",
  "Neighborhood tie-in",
  "Warm closing line"
],
  inputs: [
  {
    "key": "propertytype",
    "label": "Property type",
    "type": "select",
    "options": [
      "House",
      "Condo",
      "Townhouse",
      "Apartment"
    ]
  },
  {
    "key": "beds",
    "label": "Beds / baths",
    "type": "input",
    "placeholder": "e.g. 4 bed, 3 bath"
  },
  {
    "key": "location",
    "label": "Location / area",
    "type": "input",
    "placeholder": "e.g. Maple Heights, Austin TX"
  },
  {
    "key": "features",
    "label": "Standout features",
    "type": "textarea",
    "placeholder": "e.g. remodeled kitchen, fenced yard, 2-car garage, vaulted ceilings"
  },
  {
    "key": "tone",
    "label": "Tone",
    "type": "select",
    "options": [
      "Warm",
      "Professional",
      "Breezy"
    ]
  }
] as InputField[],
  systemPrompt: "You are a real estate copywriter. Given a property type, bed/bath count, location, standout features, and a tone, write an MLS-ready listing description: a one-line hook, 4-6 benefit-led highlight bullets, a short neighborhood tie-in, and a warm closing line. Turn features into benefits (e.g. 'remodeled kitchen' -> 'cook and host with ease'). Keep it scannable and free of cliches like 'cozy gem'. In demo mode, return a realistic sample following exactly this structure.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "3 listings/mo"
  },
  {
    "tier": "Pro",
    "price": "$19/mo",
    "desc": "Unlimited, save history"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const pt = inputs['propertytype'] || 'home'
  const bb = (inputs['beds'] || '').trim() || '3 bed, 2 bath'
  const loc = (inputs['location'] || 'your area').trim()
  const ft = (inputs['features'] || '').trim()
  const t = inputs['tone'] || 'Warm'
  if (!loc) return 'Add the location to write a listing description.'
  let out = 'LISTING DESCRIPTION (' + t + ' | ' + pt + ' in ' + loc + ')\n\n'
  out += 'HOOK\n' + bb + ' ' + pt.toLowerCase() + ' in the heart of ' + loc + ' - move-in ready and made for everyday living.\n\n'
  out += 'HIGHLIGHTS\n'
  out += '- Cook and host with ease thanks to the updated, open kitchen\n'
  out += '- Unwind or entertain in the private, fenced yard\n'
  out += '- Park two cars off-street with the attached garage\n'
  if (ft) out += '- Notable: ' + ft + '\n'
  out += '\nNEIGHBORHOOD\n' + loc + ' puts daily errands, parks, and cafes within easy reach.\n\n'
  out += 'CLOSE\nSchedule a tour and make ' + loc + ' your next address.\n\n'
  out += '\n--- (Mock demo. Add location + features for a tailored listing.)'
  return out
}
}
