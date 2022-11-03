import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AppMenuItem from './AppMenuItem';
import IconBarChart from '@material-ui/icons/BarChart'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import EditIcon from '@mui/icons-material/Edit';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import BadgeIcon from '@mui/icons-material/Badge';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import SummarizeIcon from '@mui/icons-material/Summarize';
import InsightsIcon from '@mui/icons-material/Insights';
import LogoutIcon from '@mui/icons-material/Logout';



const drawerWidth = 380;


const appMenuItems = [
  {
    name: 'Cadastro',
    Icon: AppRegistrationIcon,
    items: [
      {
        name: 'Pessoas',
        sx: { pl: 4 },
        Icon: BadgeIcon,
        items: [
          {
            name: 'Novo',
            sx: { pl: 6 },
            link: `/main-menu/cadastro/pessoas/${'new'}`,
            Icon: CreateNewFolderIcon,
          },
          {
            name: 'Editar',
            sx: { pl: 6 },
            link: `/main-menu/cadastro/pessoas/${'edit'}`,
            Icon: EditIcon,
          },
        ],
      },
      {
        name: 'Usuários',
        sx: { pl: 4 },
        Icon: BadgeIcon,
        items: [
          {
            name: 'Novo',
            sx: { pl: 6 },
            link: `/main-menu/cadastro/usuarios/${'new'}`,
            Icon: CreateNewFolderIcon,
          },
          {
            name: 'Editar',
            sx: { pl: 6 },
            link: `/main-menu/cadastro/usuarios/${'edit'}`,
            Icon: EditIcon,
          },
        ],
      },
      {
        name: 'Contas Contábeis',
        sx: { pl: 4 },
        Icon: BadgeIcon,
        items: [
          {
            name: 'Contas',
            sx: { pl: 6 },
            link: `/main-menu/cadastro/contas-contabeis/contas`,
            Icon: CreateNewFolderIcon,
          },
          {
            name: 'Contas Complementar',
            sx: { pl: 6 },
            link: `/main-menu/cadastro/contas-contabeis/contascomplement`,
            Icon: CreateNewFolderIcon,
          },
          {
            name: 'Centro de Custo',
            sx: { pl: 6 },
            link: `/main-menu/cadastro/contas-contabeis/cdc`,
            Icon: CreateNewFolderIcon,
          },
        ],
      },
      {
        name: 'Minutas Padrão',
        sx: { pl: 4 },
        Icon: BadgeIcon,
        items: [
          {
            name: 'Minuta Padrão Compra e Venda',
            sx: { pl: 6 },
            link: `/main-menu/cadastro/minutas-padrao/minutapadraocv`,
            Icon: CreateNewFolderIcon,
          },
          {
            name: 'Minuta Padrão Contrato de Locação',
            sx: { pl: 6 },
            link: `/main-menu/cadastro/minutas-padrao/minutapadraolocacao`,
            Icon: CreateNewFolderIcon,
          },
          {
            name: 'Minuta de Contrato de  Prestação de Serviços',
            sx: { pl: 6 },
            link: `/main-menu/cadastro/minutas-padrao/minutacontratoprestserv`,
            Icon: CreateNewFolderIcon,
          },
        ],
      },
      {
        name: 'Endereços',
        sx: { pl: 4 },
        Icon: BadgeIcon,
        items: [
          {
            name: 'Novo',
            sx: { pl: 6 },
            link: `/main-menu/cadastro/enderecos/${'new'}`,
            Icon: CreateNewFolderIcon,
          },
          {
            name: 'Editar',
            sx: { pl: 6 },
            link: `/main-menu/cadastro/enderecos/${'edit'}`,
            Icon: EditIcon,
          },
        ],
      },
    ],
  },
  {
    name: 'Operações',
    Icon: InsertDriveFileIcon,
    items: [
      {
        name: 'Contrato de Compra e Venda',
        sx: { pl: 4 },
        Icon: SummarizeIcon,
        items: [
          {
            name: 'Novo',
            sx: { pl: 6 },
            link: `/main-menu/operacoes/contratocv/${'new'}`,
            Icon: CreateNewFolderIcon,
          },
          {
            name: 'Consulta/Valida/Cancela',
            sx: { pl: 6 },
            link: `/main-menu/operacoes/contratocv/${'cvc'}`,
            Icon: FactCheckIcon,
          },
          {
            name: 'Editar Rascunho',
            sx: { pl: 6 },
            link: `/main-menu/operacoes/contratocv/${'edit'}`,
            Icon: EditIcon,
          },
        ],
      },
      {
        name: 'Contrato de Locação',
        sx: { pl: 4 },
        Icon: SummarizeIcon,
        items: [
          {
            name: 'Novo',
            sx: { pl: 6 },
            link: `/main-menu/operacoes/contrato-locacao/${'new'}`,
            Icon: CreateNewFolderIcon,
          },
          {
            name: 'Consulta/Valida/Cancela',
            sx: { pl: 6 },
            link: `/main-menu/operacoes/contrato-locacao/${'cvc'}`,
            Icon: FactCheckIcon,
          },
          {
            name: 'Editar Rascunho',
            sx: { pl: 6 },
            link: `/main-menu/operacoes/contrato-locacao/${'edit'}`,
            Icon: EditIcon,
          },
        ],
      },
      {
        name: 'Ordem de Serviço',
        sx: { pl: 4 },
        Icon: SummarizeIcon,
        items: [
          {
            name: 'Novo',
            sx: { pl: 6 },
            link: `/main-menu/operacoes/ordem-de-servico/${'new'}`,
            Icon: CreateNewFolderIcon,
          },
          {
            name: 'Consulta/Valida/Cancela',
            sx: { pl: 6 },
            link: `/main-menu/operacoes/ordem-de-servico/${'cvc'}`,
            Icon: FactCheckIcon,
          },
          {
            name: 'Editar Rascunho',
            sx: { pl: 6 },
            link: `/main-menu/operacoes/ordem-de-servico/${'edit'}`,
            Icon: EditIcon,
          },
        ],
      },
      {
        name: 'Lançamento Contábil',
        sx: { pl: 4 },
        Icon: SummarizeIcon,
        items: [
          {
            name: 'Novo',
            sx: { pl: 6 },
            link: `/main-menu/operacoes/lancamento-contabil/${'new'}`,
            Icon: CreateNewFolderIcon,
          },
          {
            name: 'Editar Rascunho',
            sx: { pl: 6 },
            link: `/main-menu/operacoes/lancamento-contabil/${'edit'}`,
            Icon: EditIcon,
          },
        ],
      },
      {
        name: 'Lançamento Bancos',
        sx: { pl: 4 },
        Icon: SummarizeIcon,
        items: [
          {
            name: 'Novo',
            sx: { pl: 6 },
            link: `/main-menu/operacoes/lancamento-bancos/${'new'}`,
            Icon: CreateNewFolderIcon,
          },
          {
            name: 'Editar Rascunho',
            sx: { pl: 6 },
            link: `/main-menu/operacoes/lancamento-bancos/${'edit'}`,
            Icon: EditIcon,
          },
        ],
      },
      {
        name: 'ARE',
        sx: { pl: 4 },
        Icon: SummarizeIcon,
        items: [
          {
            name: 'Gerar',
            sx: { pl: 6 },
            link: `/main-menu/operacoes/are`,
            Icon: CreateNewFolderIcon,
          }
        ],
      },
    ],
  },
  {
    name: 'Relatórios',
    Icon: InsightsIcon,
    items: [
      {
        name: 'Pesquisa Por Campo',
        sx: { pl: 4 },
        Icon: IconBarChart,
        link: `/main-menu/relatorios/pesquisa-por-campo`
      },
      {
        name: 'Lançamento',
        sx: { pl: 4 },
        Icon: IconBarChart,
        link: `/main-menu/relatorios/lancamento`
      },
      {
        name: 'Livro Razão',
        sx: { pl: 4 },
        Icon: IconBarChart,
        link: `/main-menu/relatorios/livro-razao`
      },
      {
        name: 'DRE',
        sx: { pl: 4 },
        Icon: IconBarChart,
        link: `/main-menu/relatorios/dre`
      },
      {
        name: 'Balancete',
        sx: { pl: 4 },
        Icon: IconBarChart,
        link: `/main-menu/relatorios/balancete`
      },
      
    ],
  },
  {
    name: 'Logout',
    link: '/login',
    Icon: LogoutIcon,
  },

]

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#FF9800',
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#F9B046',
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));



const AppMenu = (props: any) => {

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);


  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            SAB - Sistema Administrativo Bomlar
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >

          {/* <AppMenuItem {...appMenuItems[0]} /> */}
          {appMenuItems.map((item, index) => (
            <AppMenuItem {...item} key={index} />
          ))}

        </List>



      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {props.children}
      </Main>
    </Box>
  );
}

export default AppMenu;
