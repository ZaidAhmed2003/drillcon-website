interface BadgeProps {
  text: string;
}

const Badge = ({ text = "Badge" }: BadgeProps) => {
  return (
    <div className="flex items-center gap-1">
      <div className="bg-secondary h-[3px] w-4 rounded-sm"></div>
      <div className="text-primary text-sm font-semibold lg:text-base">
        {text}
      </div>
    </div>
  );
};

export default Badge;
