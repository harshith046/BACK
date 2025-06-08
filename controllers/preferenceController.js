const Preference = require('../models/Preference');

exports.savePreferences = async (req, res) => {
  try {
    const { theme, layout } = req.body;
    const userId = req.user.id;

    let preference = await Preference.findOne({ userId });

    if (preference) {
      preference.theme = theme;
      preference.layout = layout;
      await preference.save();
    } else {
      preference = new Preference({ userId, theme, layout });
      await preference.save();
    }

    res.status(200).json(preference);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getPreferences = async (req, res) => {
  try {
    const userId = req.user.id;
    const preference = await Preference.findOne({ userId });

    if (!preference) return res.status(404).json({ msg: 'Preferences not found' });

    res.json(preference);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
