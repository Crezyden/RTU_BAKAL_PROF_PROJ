import { useRouter } from 'next/router';
import { Dropdown, Avatar, Text, Grid, User } from "@nextui-org/react";
import  Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from '../../styles/Create.module.scss'

import  NextLink from 'next/link';
import MyLink from './Mylink';
// import Menu from '@material-ui/core/Menu';
// import { Menu } from '@mui/material/Menu';

const items = [
    { key: "setting", name: "Seting" , as: "a", href: "/user/setting" },
    { key: "Log out", name: "Log Out", color:"error" },
  ];
// let article: Items ={} as I 
const Users = [
	{name: "sscvx",
	 avatar:"https://i.pravatar.cc/150?u=a042581f4e29026024d",
	 email:"users@order.lv"
	}
];

  const userheader = () => {
	  const router = useRouter();
	  const [isOpen, setOpen] = useState(false);

	let	Links = (props) =>{
		return(
			<div className='nav_menu' >
				<Link href='/auth/user'><a className='nav-menu-button' >Home</a></Link>
				{/* <Link href='/user/servise'><a className='nav-menu-button'>Serviss</a></Link> */}
				<div className='left'>
					<Link href='/auth/user/create'><a className='nav-menu-button'>Add</a></Link>
					<div className='drop_menu'>
					<Grid.Container >							
									<Grid>
										<Dropdown placement="bottom-left">
											{Users.map(Users=>
										<Dropdown.Trigger>
											<User
											bordered
											as="button"
											size="lg"
											color="primary"
											name={Users.name}
											src={Users.avatar}
											/>
										</Dropdown.Trigger>
											)}
										<Dropdown.Menu color="primary" aria-label="User Actions">
											
											{Users.map(Users=>
											<Dropdown.Item key="profile" css={{ height: "$18" }}>
											<Text b color="inherit" css={{ d: "flex" }}>
												Signed in as
											</Text>
											<Text b color="inherit" css={{ d: "flex" }}>
												{Users.email}
											</Text>

											</Dropdown.Item>
											)}
											{items.map(items=>
												<Dropdown.Item key={items.key} as={items.as} color={items.color}>
													<Link href={`/${items.href}`} passHref>
														{/* <Dropdown.Button> */}
														{items.name} 
														{/* </Dropdown.Button> */}
													</Link>
												</Dropdown.Item>
												)}
										</Dropdown.Menu>
										</Dropdown>
									</Grid>
									</Grid.Container>
							</div>
				</div>
			</div>
		)	
	}
	
	return (
		<div className='header'>
			<main className='container'>
				<div className='head-top'>
				</div>
				<div className='head-button'>	
					<Links/>
				</div>
			</main>
		</div>
			
	);
};
export default userheader;