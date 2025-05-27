import { User } from "@heroui/react";

export const UserProfile = () => {
  return (
    <User
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      }}
      description="Product Designer"
      name="Jane Doe"
    />
  );
};
