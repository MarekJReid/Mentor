import React from 'react';




const TableDesc = () => {
    return (
        <div
        >
            <div className="container"
                style={{
                    padding: `2rem`,
                    width: '90%'
                }}
            >



                <div className="row">
                    <h1 className="center-align">
                        Get started with our finance, accounting and business
                        qualifications tailored for you
               </h1>
                    <p className="center-align">
                        Being a quality educator, we recognise that you have other
                        commitments. To help you access the right resources and expertise
                        to balance work/life/study and achieve your professional goals, we
                        have designed a range of flexible study options.
               </p>
                </div>
            
            <div className="tableDescrContainer center-align">
                <div className="row center-align">
                    <div className="col s12 m4">
                        <div className="tableDescCard">
                            <div className="tableDescCardImage">
                                
                            <img src={require('./images/tableDescrImg1.jpg')} />
                            </div>
                            <div className="tableDescCardTitle">
                                ONLINE LEARNING
                           </div>
                            <div className="tableDescCardText">
                                <p>
                                    Self-paced online learning provides you flexibility to study online and get qualification (anywhere, anytime), access to our experienced student support team between Monday to Friday,
                                    9am – 5pm by telephone and email to receive support and feedback as you learn in real time.
                               </p>
                            </div>
                            <div className="tableDescCardButton"
                            style={{
                                paddingBottom: `2rem`
                            }}
                            >
                            <button className="btn red">Find out how </button>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="tableDescCard">
                            <div className="tableDescCardImage">
                            <img src={require('./images/tableDescrImg2.jpg')} />
                            </div>
                            <div className="tableDescCardTitle">
                                VIRTUAL CLASSROOMS
                           </div>
                            <div className="tableDescCardText">
                                <p>
                                    Classroom learning (Virtual and In-Class) aprovide the complete learning experience. Conducted either face to face or
                                    via video conference and facilitated by industry professionals skilled at making the class experience interactive, incorporating real life examples of today’s market place.
                               </p>
                            </div> 
                            <div className="tableDescCardButton"
                            style={{
                                paddingBottom: `2rem`
                            }}
                            >
                            <button className="btn red">Find out how </button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="tableDescCard">
                            <div className="tableDescCardImage">
                            <img src={require('./images/tableDescrImg3.jpg')} />
                            </div>
                            <div className="tableDescCardTitle">
                                CORPORATE TRAINING
                           </div>
                            <div className="tableDescCardText">
                                <p>
                                    We can customise delivery of our series of courses to suit your corporate requirements.
                                    Training solutions can be delivered on your premises by our facilitators or under a content licensing arrangement. Course Branding options available.
                                    Please contact us for more information.
                               </p>
                            </div>
                            <button className="btn red">Find out how </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default TableDesc;

