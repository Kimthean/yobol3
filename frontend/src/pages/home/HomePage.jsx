import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from '../../components/common/Posts';

const HomePage = () => {
	const [feedType, setFeedType] = useState('forYou');

	return (
		<div className='d-flex flex-column w-100 min-vh-100'>
			<nav className="d-flex justify-content-center navbar navbar-expand-lg">
				<div className="row align-items-center w-100">
					<div className="col-2 d-flex py-5">
						<div className="d-flex justify-content-center align-items-center rounded-circle bg-light" style={{width: '60px', height: '60px'}}>
							<i className="bi bi-person" style={{fontSize: '80px'}}></i>
						</div>
					</div>
					<div className="col-8 d-flex justify-content-center">
						<a className="navbar-brand" href="#">
							<img src="logo-blue.svg" alt="Home"/>
						</a>
					</div>
				</div>
			</nav>

			<div className="justify-content-between d-flex row custom-height">
				<div className="col-2 d-flex align-items-center bg-light py-4">
					<div className="mx-5">
						<h1>Hello Natalice</h1>
						<p>Share us the issues around your area.</p>
						<div className="input-group">
							<input type="text" className="form-control" placeholder="Search..." aria-label="Search"/>
							<button className="btn btn-outline-dark" type="button">
								<i className="bi bi-search"></i>
							</button>
						</div>
					</div>
				</div>
				<div className="col-10 d-flex align-items-center bg-light">
					<div className="mx-auto text-center">
						<div className="position-relative d-inline-block">
							<img src="Rectangle%208.png" alt="Area Condition" className="img-fluid img-rectangle"/>
							<div className="position-absolute top-50 start-50 translate-middle">
								<img src="Natural_resources_sustainability.png" className="img-fluid img-overlay"/>
							</div>
						</div>
						<h3 className="p-3">Area Condition</h3>
					</div>
					<div className="mx-auto text-center">
						<div className="position-relative d-inline-block">
							<img src="Rectangle%2010.png" alt="Campaigns" className="img-fluid img-rectangle"/>
							<div className="position-absolute top-50 start-50 translate-middle">
								<img src="Group%206(1).png" className="img-fluid img-overlay"/>
							</div>
						</div>
						<h3 className="p-3">Campaigns</h3>
					</div>
					<div className="mx-auto text-center">
						<div className="position-relative d-inline-block">
							<img src="Rectangle%2012.png" alt="Ranking" className="img-fluid img-rectangle"/>
							<div className="position-absolute top-50 start-50 translate-middle">
								<img src="Frame(3).png" className="img-fluid img-overlay"/>
							</div>
						</div>
						<h3 className="p-3">Ranking</h3>
					</div>
				</div>
			</div>

			<div className='flex-1 d-flex flex-column'>

				{/* POSTS */}
				<Posts feedType={feedType}/>
			</div>

			{/* Header */}
			<div className='home-bottom-bar d-flex border-top border-gray-700'>
				<div
					className="d-flex justify-content-center align-items-center flex-1 p-3 position-relative cursor-pointer"
					onClick={() => setFeedType('forYou')}
				>
					<i className="bi text-7xl text-white bi-house"></i>
					{feedType === 'forYou' && (
						<div className='position-absolute bottom-0 w-100 h-1 rounded bg-primary'></div>
					)}
				</div>

				{/*<Link to="/create-post" className="d-flex justify-content-center align-items-center flex-1 p-3 position-relative cursor-pointer">*/}
				{/*	<i className="bi text-7xl text-white bi-plus-circle"></i>*/}
				{/*</Link>*/}
				<div
					className='d-flex justify-content-center align-items-center flex-1 p-3 position-relative cursor-pointer'
					onClick={() => setFeedType('following')}
				>
					<i className="bi text-7xl text-white bi-megaphone"></i>
					{feedType === 'following' && (
						<div className='position-absolute bottom-0 w-100 h-1 rounded bg-primary'></div>
					)}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
