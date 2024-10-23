import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const IntroductionProduct = () => {
  return (
    <div className={styles.introduction_product}>
      <h5>Introduction to Product</h5>
      <div className={styles.ip_product}>
        <p>
          Bolt is content management system, or CMS. Subscription includes
          content hosting, professionally designed layouts, 24/7 support, and
          access to our user-friendly platform for managing your business. You
          can use bolt to create management systems.
        </p>
        <div className={styles.ipp_recomm}>
          <span>Recommended:</span>
          <span>
            You can learn faster by looking some onboarding videos in video
            gallery.
          </span>
        </div>
      </div>
      <div className={styles.starting_guide}>
        <h5>Starting Guide</h5>
        <p>
          You can choose from a range of billing plans to get your idea working,
          whether you’re starting with a website or launching a new business.
        </p>
        <ul>
          <li>
            <span>1</span>
            <span>
              All billing plans are available on monthly and annual payment
              cycles. On an annual billing cycle, the average monthly cost is
              lower, and you can get a 3 months free.
            </span>
          </li>
          <li>
            <span>2</span>
            <span>
              Upgrade to paid service to make your site public. If you need more
              time to design your site before going live, you can hide it behind
              a password.
            </span>
          </li>
          <li>
            <span>3</span>
            <span>
              Site has a trial period. Trial period is free two-week period
              where you can explore the platform, upload content, experiment
              with ecommerce website.
            </span>
          </li>
        </ul>
      </div>
      <h5>Additional Information</h5>
      <div className={styles.additional_info}>
        <ul>
          <li>
            <Link>Onboarding</Link>
          </li>
          <li>
            <Link>Tutorials</Link>
          </li>
          <li>
            <Link>Guides for Beginners</Link>{" "}
          </li>
        </ul>
        <p>
          In addition to our guides and video tutorials, we offer webinars to
          help you get comfortable and explore our product functionality. In our
          webinars, we walk you through the basics of setting up and growing
          your business.
        </p>
        <p>
          After it ends, we'll email you a video link to the webinar so you can
          remember everything you have learn anytime. If you can't attend the
          webinar at its scheduled time, you can watch it later.
        </p>
      </div>
      <h5>Was this article helpfull?</h5>
      <div className={styles.helpfull}>
        <button>Yes</button>
        <button>No</button>
        <p>50 people find this article helpfull</p>
      </div>
    </div>
  );
};
export default IntroductionProduct;
