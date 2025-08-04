import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import {
  ShieldAlert,
  List,
  History,
  BookOpen,
  Users,
  Landmark,
  Globe,
  Scale,
  Menu,
  Image,
  Gavel, // Import the Gavel icon
  FileText, // Import the FileText icon
  GitMerge,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const navItems = [
  { to: '/', icon: List, labelKey: 'nav_timeline', defaultLabel: 'Timeline', end: true },
  { to: '/dossie', icon: FileText, labelKey: 'nav_dossie', defaultLabel: 'Dossiê' },    
  { to: '/usaid-tse', icon: GitMerge, labelKey: 'nav_usaid_tse', defaultLabel: 'TSE' },
  { to: '/prisoes-politicas', icon: Landmark, labelKey: 'nav_prisoes_politicas', defaultLabel: 'Prisões Políticas' },
  { to: '/tio-joe', icon: Users, labelKey: 'nav_tio_joe', defaultLabel: 'Tio Joe' },
  { to: '/usaid', icon: Globe, labelKey: 'nav_usaid', defaultLabel: 'USAID' },
  { to: '/ofac', icon: Scale, labelKey: 'nav_ofac', defaultLabel: 'OFAC' },
  { to: '/ieepa', icon: Gavel, labelKey: 'nav_ieepa', defaultLabel: 'IEEPA' },
  { to: '/gallery', icon: Image, labelKey: 'nav_gallery', defaultLabel: 'Gallery' },
  { to: '/educational-resources', icon: BookOpen, labelKey: 'nav_resources', defaultLabel: 'Resources' },
];

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const desktopNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-muted-foreground'
    }`;
  
  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center p-2 rounded-md text-lg ${
      isActive ? 'bg-muted text-primary' : 'text-foreground'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <ShieldAlert className="h-6 w-6" />
            <span className="font-bold sm:inline-block">
              {t('app_title', 'Censorship Timeline')}
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={desktopNavLinkClasses} end={item.end}>
                <item.icon className="h-4 w-4 mr-2" />
                {t(item.labelKey, item.defaultLabel)}
              </NavLink>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link to="/" className="flex items-center space-x-2 mb-8" onClick={() => setIsSheetOpen(false)}>
                  <ShieldAlert className="h-6 w-6" />
                  <span className="font-bold">
                    {t('app_title', 'Censorship Timeline')}
                  </span>
                </Link>
                <nav className="grid gap-2">
                  {navItems.map((item) => (
                    <NavLink key={item.to} to={item.to} className={mobileNavLinkClasses} end={item.end} onClick={() => setIsSheetOpen(false)}>
                      <item.icon className="h-5 w-5 mr-4" />
                      {t(item.labelKey, item.defaultLabel)}
                    </NavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;