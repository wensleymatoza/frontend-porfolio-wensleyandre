import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

const ContactDropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="text-[24px] text-[#FAFAFA] hover:scale-105 transition-transform duration-200 focus:outline-none"
      >
        Contact ▾
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-50 w-56 rounded-2xl border border-white/10 bg-[#1f2326] p-2 shadow-xl"
        >
          <DropdownMenu.Item asChild>
            <a
              href="mailto:youremail@gmail.com"
              className="block rounded-xl px-4 py-2 text-white/90 outline-none hover:bg-white/10 focus:bg-white/10"
            >
              ✉ Email
            </a>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl px-4 py-2 text-white/90 outline-none hover:bg-white/10 focus:bg-white/10"
            >
              LinkedIn
            </a>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl px-4 py-2 text-white/90 outline-none hover:bg-white/10 focus:bg-white/10"
            >
              GitHub
            </a>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default ContactDropdown
