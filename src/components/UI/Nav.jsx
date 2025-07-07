import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";
import { Link } from "react-router-dom";

export const LapsiLogo = () => {
  return (
    <img
      className="h-9 w-9"
      src="/Logo.webp"
      alt="Logo"
    />
  );
};

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Inicio", path: "/" },
    { label: "Salas", path: "/salas" },
    { label: "Misión", path: "/mision" },
    { label: "Visión", path: "/vision" },
    { label: "Sobre Nosotros", path: "/nosotros" },
    { label: "Iniciar sesión", path: "/login" },
    { label: "Registrarse", path: "/register" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      {/* IZQUIERDA: Toggle y logo */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <LapsiLogo />
          <p className="font-bold text-inherit">LAPSI</p>
        </NavbarBrand>
      </NavbarContent>

      {/* CENTRO: menú visible solo en pantallas >= sm */}
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      >
        {menuItems.slice(0, 5).map((item) => (
          <NavbarItem key={item.label}>
            <Link
              className="font-semibold text-secondary"
              to={item.path}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* DERECHA: botones login/registro */}
      <NavbarContent justify="end">
        <NavbarItem className="text-primary hidden lg:flex font-semibold">
          <Link to="/login">Iniciar sesión</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            to="/register"
            variant="flat"
            className="font-semibold bg-primary-900 text-off-white"
          >
            Registrarse
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* MENÚ RESPONSIVO (para móviles) */}
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.label}>
            <Link
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="w-full font-semibold text-secondary"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
