import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'

const AppLayout = ({children}) =>{
    // proptypes node에 있는거
    return (
        // <div>
        //     <div>공통메뉴</div>
        //     {children}
        // </div>
        <div>
            <div>
                {/*  주의할 점 a태그에 주소를 적지 않는다. */}
                <Link href="/"><a>노드버드</a></Link>
                <Link href="/profile"><a>프로필</a></Link>
                <Link href="/signup"><a>회원가입</a></Link>
            </div>
            {children}
        </div>
    )
}

AppLayout.PropTypes = {
    children : PropTypes.node.isRequired
}
export default AppLayout;