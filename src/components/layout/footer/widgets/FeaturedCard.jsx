const features = [
  {
    icon: "/icons/discount.svg",
    title: "Best prices & offers",
    subtitle: "Orders $50 or more",
  },
  {
    icon: "/icons/delivery.svg",
    title: "Free delivery",
    subtitle: "Orders $50 or more",
  },
  {
    icon: "/icons/daily-deal.svg",
    title: "Great daily deal",
    subtitle: "Orders $50 or more",
  },
  {
    icon: "/icons/assortment.svg",
    title: "Wide assortment",
    subtitle: "Orders $50 or more",
  },
  {
    icon: "/icons/returns.svg",
    title: "Easy returns",
    subtitle: "Orders $50 or more",
  },
];

export default function FeatureCards() {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 py-6 bg-[#f9f9fc]">
      {features.map((feature, index) => (
        <div
          key={index}
          className="w-60 flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
        >
          <img
            src={feature.icon}
            alt={feature.title}
            className="w-8 h-8 object-contain"
          />
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-400">{feature.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
