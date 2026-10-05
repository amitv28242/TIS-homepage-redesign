import { MapPin, Mail, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/icons/BrandIcons";
import { navigation } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-soft)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 md:pr-16 lg:pr-24">
          <h3 className="font-semibold text-lg mb-3">
            Tulas International School
          </h3>
          <p className="text-sm text-[var(--text-muted)] max-w-sm">
            Nurturing curious minds and global citizens through a world-class
            international curriculum.
          </p>
          <div className="flex gap-3 mt-5">
            {[FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="w-9 h-9 rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                >
                  <Icon size={16} />
                </a>
              )
            )}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-emerald-500">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-[var(--text-muted)]">
            <li className="flex gap-2 items-start">
              <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden />
              <span>Dehradun, Uttarakhand, India</span>
            </li>
            <li className="flex gap-2 items-start">
              <Mail size={16} className="mt-0.5 shrink-0" aria-hidden />
              <span>admissions@tis.edu.in</span>
            </li>
            <li className="flex gap-2 items-start">
              <Phone size={16} className="mt-0.5 shrink-0" aria-hidden />
              <span>+91 00000 00000</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border)] py-5 text-center text-xs text-[var(--text-muted)]">
        © {new Date().getFullYear()} Tulas International School. All rights
        reserved.
      </div>
    </footer>
  );
}