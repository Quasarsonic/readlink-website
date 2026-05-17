import { Plus } from "lucide-react";

type ParticipantAvatarProps = {
  name: string;
  handle: string;
  size?: number;
};

export function ParticipantAvatar({ name, handle, size = 52 }: ParticipantAvatarProps) {
  const isEmpty = !name && !handle;

  return (
    <div
      className="flex items-center justify-center overflow-hidden rounded-[12px] border border-[rgba(255,255,255,0.06)]"
      style={{ width: size, height: size }}
    >
      {isEmpty ? (
        <Plus
          className="text-[#666666]"
          size={Math.round(size * 0.42)}
          strokeWidth={1.5}
          aria-hidden
        />
      ) : null}
    </div>
  );
}
