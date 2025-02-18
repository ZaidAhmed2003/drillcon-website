interface BadgeProps {
  text: string;
}

const Badge = ({ text = "Badge" }: BadgeProps) => {
  return (
    <div className="flex items-center gap-1">
      <div className="w-4 h-[3px] rounded-sm bg-secondary"></div>
      <div className="text-primary font-semibold text-sm lg:text-base">
        {text}
      </div>
    </div>
  );
};

export default Badge;