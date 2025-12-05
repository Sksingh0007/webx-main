"use client";

import React, { useState, useTransition } from "react";
import { updateName } from "@/Action/account";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface AccountPageProps {
  user: {
    id: string;
    name: string | null;
    email: string;
    isVerified: boolean;
    avatarUrl: string | null;
    role: string;
    createdAt: Date;
  };
}

export default function AccountPage({ user }: AccountPageProps) {
  const [name, setName] = useState(user.name || "");
  const [isPending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);

  function saveName() {
    startTransition(async () => {
      await updateName(user.id, name);
      setSaved(true);
      setTimeout(() => setSaved(false), 1500);
    });
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Account <span className="text-primary">Settings</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Manage your profile information, identity, and account visibility.
        </p>
      </div> */}

      {/* GRID LIKE CONTACT PAGE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
              <CardDescription>
                Basic identity information visible on your account.
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6">
              <div className="relative h-28 w-28 rounded-full overflow-hidden border shadow-sm">
                <img
                  src={
                    user.avatarUrl ||
                    "https://api.dicebear.com/7.x/lorelei/svg?seed=user"
                  }
                  alt="avatar"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="text-center">
                <div className="text-lg font-semibold">{name || "Unnamed"}</div>
                <div className="text-sm text-muted-foreground">{user.role}</div>
              </div>

              <div className="w-full text-left">
                <Label>Email</Label>
                <p className="text-sm break-all mt-1">{user.email}</p>
              </div>

              <div className="w-full text-left">
                <Label>Member Since</Label>
                <p className="text-sm mt-1">
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security & Status</CardTitle>
              <CardDescription>
                Account verification and identity.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <p>
                Verification status:{" "}
                <span
                  className={
                    user.isVerified ? "text-green-600" : "text-red-600"
                  }
                >
                  {user.isVerified ? "Verified" : "Not Verified"}
                </span>
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Edit Profile</CardTitle>
            <CardDescription>
              Update your basic account information.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input value={user.email} readOnly className="bg-muted" />
            </div>

            <Button onClick={saveName} disabled={isPending} className="w-full">
              {isPending ? "Saving..." : "Save Changes"}
            </Button>

            {saved && (
              <p className="text-green-600 text-center text-sm">
                Profile updated successfully!
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
