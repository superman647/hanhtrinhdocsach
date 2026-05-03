"use client"

import Image from "next/image"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface AvatarSelectionProps {
  selectedAvatar: string
  setSelectedAvatar: (avatar: string) => void
}

export function AvatarSelection({ selectedAvatar, setSelectedAvatar }: AvatarSelectionProps) {
  // Avatar data
  const avatars = [
    {
      id: "avatar1",
      src: "/images/avatar/avatar1.png",
      alt: "Avatar 1",
    },
    {
      id: "avatar2",
      src: "/images/avatar/avatar2.png",
      alt: "Avatar 2",
    },
    {
      id: "avatar3",
      src: "/images/avatar/avatar3.png",
      alt: "Avatar 3",
    },
    {
      id: "avatar4",
      src: "/images/avatar/avatar4.png",
      alt: "Avatar 4",
    },
    {
      id: "avatar5",
      src: "/images/avatar/avatar1.png",
      alt: "Avatar 5",
    },
    {
      id: "avatar6",
      src: "/images/avatar/avatar2.png",
      alt: "Avatar 6",
    },
    {
      id: "avatar7",
      src: "/images/avatar/avatar3.png",
      alt: "Avatar 7",
    },
    {
      id: "avatar8",
      src: "/images/avatar/avatar4.png",
      alt: "Avatar 8",
    },
  ]

  return (
    <RadioGroup value={selectedAvatar} onValueChange={setSelectedAvatar} className="grid grid-cols-4 gap-2">
      {avatars.map((avatar) => (
        <div key={avatar.id} className="flex flex-col items-center space-y-1">
          <Label
            htmlFor={avatar.id}
            className={`relative cursor-pointer rounded-full overflow-hidden border-2 ${
              selectedAvatar === avatar.id ? "border-green-600" : "border-transparent hover:border-muted"
            }`}
          >
            <Image
              src={avatar.src || "/placeholder.svg"}
              alt={avatar.alt}
              width={60}
              height={60}
              className="h-14 w-14 rounded-full object-cover"
            />
            <RadioGroupItem value={avatar.id} id={avatar.id} className="sr-only" />
          </Label>
        </div>
      ))}
    </RadioGroup>
  )
}
