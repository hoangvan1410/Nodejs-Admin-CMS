module.exports = ({ HeartRateRepository }) => (user_id,from_date,to_date) => HeartRateRepository.getByUserIdAndDate(user_id,from_date,to_date)
