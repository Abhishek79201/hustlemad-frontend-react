import React from 'react'
import calm from '../../../images/subscriptions/Calm.svg';
import headspace from '../../../images/subscriptions/headspace.svg';
import spotify from '../../../images/subscriptions/spotify.svg';
import masterclass from '../../../images/subscriptions/masterclass.svg';
import youtube from '../../../images/subscriptions/Youtube.svg';
import mubi from '../../../images/subscriptions/mubi.svg';
import innerhour from '../../../images/subscriptions/innerhour.svg';
import theken from '../../../images/subscriptions/theken.svg';
import ultrahuman from '../../../images/subscriptions/ultrahuman.svg';
import cultfit from '../../../images/subscriptions/Cultfit.svg';
import line from '../../../images/subscriptions/Build line.svg';
import shape from '../../../images/subscriptions/Shape.svg';
import subscriptionstyles from './subscription.module.css';
import shortarrow from "../../../images/Brands/shortarrow.svg";

function subscription() {
    return (
        <div className={subscriptionstyles.subscribe} data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
            <div className={subscriptionstyles.changer}>
                <div className={subscriptionstyles.shortarrow}>
                    <img src={shortarrow} alt="" />
                </div>
                <div className={subscriptionstyles.text}>
                    <p>Coming Soon</p>
                </div>
            </div>
            <h1>Build a <span><img className={subscriptionstyles.ovalshape} src={shape}></img>modern</span> Swag Box</h1>
            <h2>Choose subscriptions of hand-picked apps for your Tribe.</h2>
            <div className={subscriptionstyles.subscribeapps}>
                <div className={`${subscriptionstyles.subscribelogo} ${subscriptionstyles.calm}`}>
                    <img src={calm} alt="Logo" />
                </div>
                <div className={`${subscriptionstyles.subscribelogo} ${subscriptionstyles.headspace}`}>
                    <img src={headspace} alt="Logo" />
                </div>
                <div className={`${subscriptionstyles.subscribelogo} ${subscriptionstyles.spotify}`}>
                    <img src={spotify} alt="Logo" />
                </div>
                <div className={`${subscriptionstyles.subscribelogo} ${subscriptionstyles.masterclass}`}>
                    <img src={masterclass} alt="Logo" />
                </div>
                <div className={`${subscriptionstyles.subscribelogo} ${subscriptionstyles.youtube}`}>
                    <img src={youtube} alt="Logo" />
                </div>
                <div className={`${subscriptionstyles.subscribelogo} ${subscriptionstyles.mubi}`}>
                    <img src={mubi} alt="Logo" />
                </div>
                <div className={`${subscriptionstyles.subscribelogo} ${subscriptionstyles.innerhour}`}>
                    <img src={innerhour} alt="Logo" />
                </div>
                <div className={`${subscriptionstyles.subscribelogo} ${subscriptionstyles.theken}`}>
                    <img src={theken} alt="Logo" />
                </div>
                <div className={`${subscriptionstyles.subscribelogo} ${subscriptionstyles.ultrahuman}`}>
                    <img src={ultrahuman} alt="Logo" />
                </div>
                <div className={`${subscriptionstyles.subscribelogo} ${subscriptionstyles.last} ${subscriptionstyles.cultfit}`}>
                    <img src={cultfit} alt="Logo" />
                </div>
            </div>
            <div className={subscriptionstyles.pinkline}>
                <img src={line} alt="Endline" />
            </div>
        </div>
    )
}

export default subscription