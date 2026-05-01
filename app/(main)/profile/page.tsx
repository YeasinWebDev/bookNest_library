"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaCamera } from "react-icons/fa";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MdEdit } from "react-icons/md";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";

export default function ProfilePage() {
  const [open, setOpen] = useState(false);
  const interestOptions: string[] = ["Science Fiction", "Fantasy", "Mystery", "Romance", "Thriller", "Historical Fiction", "Biography", "Self-Help"];

  const [interests, setInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setInterests((prev) => (prev.includes(interest) ? prev.filter((item) => item !== interest) : [...prev, interest]));
  };

  return (
    <main className="max-w-screen-2xl mx-auto px-6 md:px-10 py-16 space-y-20 mt-10">
      {/* Profile Header */}
      <section className="bg-white rounded-3xl p-6 md:p-10 border shadow-sm">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar */}
          <div className="relative">
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-3xl overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMFfpZeuKoGFtYTvYf7Qu0reMKNaMVVx1gL9hdtfBteK1Q5_gq3gF0BturgMfNBb6KxOCiNKgUosix6GCkMrGBmId-J4VZA4xWrncZx1RKowmUk7Tye2pCBuWESxyf6TCkbUk8aZTltBR5X2QxBWgvSGDUCntxKcdpY0sXHktJqY-kOzrdAhh35fP6_rOY_ZLPSldCnLOlklG_yMSREAe_8UZTwkSrJ0j7JI5krfYOlQvWY0KpYPsM2z1j6clG3IHqI6d107vqglEy"
                alt="Profile"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />

              {/* camera badge (kept style like screenshot) */}
              <div className="absolute bottom-2 right-2 bg-indigo-600 text-white p-2 rounded-lg shadow">
                <FaCamera />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900">Alex Reed</h1>

                <p className="text-slate-500 mt-2 flex items-center gap-2 justify-center md:justify-start">
                  <span>📧</span>
                  alex.reed@booknest.com
                </p>
              </div>

              <div className="flex gap-3 justify-center md:justify-end">
                {/* shadcn Dialog (NO STYLE CHANGE) */}
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button className="rounded-md bg-indigo-600 hover:bg-indigo-700">
                      <MdEdit /> Edit Profile
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-[500px] rounded-md max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4 py-4">
                      <Input className="rounded-sm" defaultValue="Alex Reed" />
                      <Input className="rounded-sm" defaultValue="alex.reed@booknest.com" />
                      <Textarea className="h-32 resize-none rounded-sm" defaultValue="Passionate reader of science fiction and contemporary fantasy" />

                      <div className="space-y-2">
                        <label className="text-sm font-medium pl-2">Interests</label>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild className="w-full rounded-sm mt-2">
                            <Button variant="outline" className="w-full justify-between">
                              {interests.length > 0 ? interests.join(", ") : "Select interests"}
                            </Button>
                          </DropdownMenuTrigger>

                          <DropdownMenuContent className="w-full">
                            {interestOptions.map((item) => (
                              <DropdownMenuCheckboxItem key={item} checked={interests.includes(item)} onCheckedChange={() => toggleInterest(item)}>
                                {item}
                              </DropdownMenuCheckboxItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    <DialogFooter className="gap-2">
                      <Button variant="outline" className="rounded-md" onClick={() => setOpen(false)}>
                        Cancel
                      </Button>

                      <Button className="bg-indigo-600 hover:bg-indigo-700 rounded-md" onClick={() => setOpen(false)}>
                        Save Changes
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Tags (UNCHANGED STYLE) */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-6">
              {["Bibliophile", "Sci-Fi Enthusiast", "Reviewer"].map((tag) => (
                <span key={tag} className="px-4 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Books Read", value: 128, icon: "library_books" },
          { label: "Favorites", value: 42, icon: "favorite" },
          { label: "Reviews", value: 86, icon: "rate_review" },
        ].map((item) => (
          <div key={item.label} className="bg-white p-8 rounded-3xl border text-center shadow-sm">
            <div className="flex justify-center mb-4">
              <span className="material-symbols-outlined text-indigo-600 text-4xl">{item.icon}</span>
            </div>
            <div className="text-4xl font-bold">{item.value}</div>
            <div className="text-slate-500 text-sm uppercase mt-1">{item.label}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
