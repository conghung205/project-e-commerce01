import Button from "@components/Button/Button";
import React from "react";
import FormItem from "@pages/DetailProduct/components/FormItem";
import styles from "../styles.module.scss";

const Review = () => {
    const {
        containerReview,
        reviewTitle,
        noReview,
        reviewFormWrapper,
        replyTitle,
        emailNotes,
        formRating,
        formReview,
        formName,
        formEmail,
        consent,
        btnSubmit,
    } = styles;

    return (
        <div className={containerReview}>
            <div className={reviewTitle}>Reviews</div>
            <p className={noReview}>There are no reviews yet.</p>

            <div className={reviewFormWrapper}>
                <div className={replyTitle}>
                    Be the first to review “Amet faucibus nunc”
                </div>
                <p className={emailNotes}>
                    Your email address will not be published. Required fields
                    are marked
                </p>

                {/* RATING */}
                <div className={formRating}>
                    <FormItem
                        label={"Your rating"}
                        isRequired
                        typeChildren={"rating"}
                    />
                </div>

                {/* REVIEW */}
                <div className={formReview}>
                    <FormItem
                        label={"Your review"}
                        isRequired
                        typeChildren={"textarea"}
                    />
                </div>

                {/* INPUT NAME */}
                <div className={formName}>
                    <FormItem
                        label={"Name"}
                        isRequired
                        typeChildren={"input"}
                    />
                </div>

                {/* INPUT EMAIL */}
                <div className={formEmail}>
                    <FormItem
                        label={"Email"}
                        isRequired
                        typeChildren={"input"}
                    />
                </div>

                <div className={consent}>
                    <input type="checkbox" name="" id="" />
                    <p>
                        Save my name, email, and website in this browser for the
                        next time I comment.
                    </p>
                </div>

                <div className={btnSubmit}>
                    <Button content={"SUBMIT"} />
                </div>
            </div>
        </div>
    );
};

export default Review;
