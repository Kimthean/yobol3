import {Link} from "react-router-dom";
import {useState} from "react";

export const Footer = () => {
    const [feedType, setFeedType] = useState('forYou');

    return (
        <div className='home-bottom-bar d-flex border-top border-gray-700'>
            <div
                className="d-flex justify-content-center align-items-center flex-1 p-3 position-relative cursor-pointer"
                onClick={() => setFeedType('forYou')}
            >
                <Link to="/">

                    <i className="bi text-7xl text-white bi-house"></i>
                    {feedType === 'forYou' && (
                        <div className='position-absolute bottom-0 w-100 h-1 rounded bg-primary'></div>
                    )}
                </Link>
            </div>
            <Link to="/create-post"
                  className="d-flex justify-content-center align-items-center flex-1 p-3 position-relative cursor-pointer">
                <i className="bi text-7xl text-white bi-plus-circle"></i>
            </Link>
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
    )
}