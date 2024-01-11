import React from "react";
import google from "../../assets/google_read_reviews.png";
import winner from "../../assets/Sitejabber_final.webp";
import trust from "../../assets/Trustpilot.png";
import yelp from "../../assets/yelp_final.png";
import yell from "../../assets/Yell_1.png";
import facebook from "../../assets/5-Star-Reviews-on-Facebook.png";

const Service = () => {
  return (
    <section className="mt-52 py-5">
      <div className="italic font-serif flex flex-col gap-5">
        <h1 className="font-bold text-[32px] text-center text-yellow-500">
          Dissertation Writing Services UK
        </h1>
        <p className="text-[20px]">
          Projectsdeal is the UK's only dissertation writing service that is
          consistently awarded the title of "No.1 Dissertation Writing Service"
          by every major public review platform, including Google, TrustPilot,
          Sitejabber, Yell, and Yelp, with all reviews receiving a perfect
          5-star rating. The rationale behind this achievement is simple: We
          Deliver! We go to the extreme ends to ensure our Clients are Happy and
          Super Successful. And that's Non-Negotiable for us.
        </p>
        <p>
          We have been, we are, and we will always be the Most Loved & Trusted
          Dissertation Writing Service in the UK. We are proud, & you will be
          too! We are proud of our achievements & flawless track record. Please
          read our reviews:
        </p>
      </div>
      <div className="mt-5 flex items-center justify-center gap-5">
        <img className="w-32 h-max" src={google} alt="" />
        <img className="w-32 h-max" src={winner} alt="" />
        <img className="w-32 h-max" src={trust} alt="" />
        <img className="w-32 h-max" src={yelp} alt="" />
        <img className="w-32 h-max" src={yell} alt="" />
        <img className="w-32 h-max" src={facebook} alt="" />
      </div>
    </section>
  );
};

export default Service;
