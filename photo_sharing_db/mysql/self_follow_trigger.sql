-- Trigger to prevent a user from following itself
DELIMITER $$

CREATE TRIGGER prevent_self_follow
     BEFORE  INSERT ON follows FOR EACH ROW
     BEGIN
	 	IF NEW.follower_id = NEW.followee.id
		THEN
			SIGNAL SQLSTATE '45000'
				SET MESSAGE_TEXT = 'You cannot follow your own account.'
		END IF;
	END;
$$

DELIMITER ;