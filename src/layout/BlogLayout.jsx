import  Content  from '../components/contents';
import  Header  from '../components/header';
import LeftSidebar from '../components/sidebar/left-sidebar'
import RightSidebar from '../components/sidebar/right-sidebar'


import Footer from '../components/footer';
import React from 'react';


class MainLayout extends React.Component {
  
  // close sidebar when
  handleContentClick = event => {
    // close sidebar if sidebar is open and screen size is less than `md`
    if (
      MainLayout.isSidebarOpen() &&
      (this.props.breakpoint === 'xs' ||
        this.props.breakpoint === 'sm' ||
        this.props.breakpoint === 'md')
    ) {
      this.openSidebar('close');
    }
  };

  checkBreakpoint(breakpoint) {
    switch (breakpoint) {
      case 'xs':
      case 'sm':
      case 'md':
        return this.openSidebar('close');

      case 'lg':
      case 'xl':
      default:
        return this.openSidebar('open');
    }
  }

  openSidebar(openOrClose) {
    if (openOrClose === 'open') {
      return document
        .querySelector('.cr-sidebar')
        .classList.add('cr-sidebar--open');
    }
    document.querySelector('.cr-sidebar').classList.remove('cr-sidebar--open');
  }

  render() {
    const { children } = this.props;
    return (
      <main className="cr-app body">
        <Content>
           <Header />
            <div className="main-body blog container">
                <div className="row">
                    <LeftSidebar class="left-sidebar col-3" />
                    <div className="col-6">{children}</div>
                    <RightSidebar class="right-sidebar col-3" />
                </div>
            </div>
           <Footer />
        </Content>
      </main>
    );
  }
}

export default MainLayout;