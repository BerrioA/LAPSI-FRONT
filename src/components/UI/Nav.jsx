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
  return <img className="h-9 w-9" src="/Logo.webp" alt="Logo" />;
};

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Inicio",
    "Salas",
    "Misión",
    "Visión",
    "Sobre Nosotros",
    "Iniciar sesión",
    "Registrarse",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
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

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="font-semibold text-secondary" to="/">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" to="#">
            Salas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-semibold text-secondary" to="#">
            Misión
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-semibold text-secondary" to="#">
            Visión
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-semibold text-secondary" to="#">
            Sobre Nosotros
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="text-primary hidden lg:flex font-semibold">
          <Link to="/login">Iniciar sesión</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="font-semibold bg-primary-900 text-off-white"
            to="/register"
            variant="flat"
          >
            Registrarse
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              to="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
