// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

const registration = {
  name: "Techlance Maintenance",
  address: "123 Bayview Street, Calgary",
  hst: "12345",
  unit: null,
  website: "www.absolute.com",
  discoverDescription: "We discovered this site while we were developing it",
  industryStandardAgreement: true,
};

const insurance = {
  businessId: 2,
  brokerEmail: "test@gmail.com",
  contactBrokerPermission: true,
  insurancePolicyNumber: "123",
  insuranceAgreement: true,
};

const reference = [
  {
    businessId: 1,
    fullName: "Vikas Arora",
    relationship: "Co Founder",
    company: "Techlance",
    email: "aroravikas583@gmail.com",
    phone: "43432423424",
    description: "Bai a apna",
  },
  {
    businessId: 1,
    fullName: "Nischal Dutt",
    relationship: "Co Founder",
    company: "Techlance",
    email: "nischal@gmail.com",
    phone: "43432423424",
    description: "E chota Bai a apna",
  },
];

const addServices = {
  serviceIds: [33, 34, 35, 36],
  businessId: 1,
};
