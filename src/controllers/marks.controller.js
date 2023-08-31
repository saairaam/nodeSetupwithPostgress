const { Student, Mark } = require("./models");

export const addMark = async (req, res) => {
  console.log("Adding marks");
  const id = parseInt(req.params.id);
  const { maths, science, english, tamil, social } = req.body;

  try {
    const student = await Student.findByPk(id);
    if (!student) {
      res.send("ID not found");
    } else {
      const avg = (maths + science + social + english + tamil) / 5;
      const remark = avg > 50 ? "pass" : "fail";

      await Mark.create({
        student_id: id,
        maths,
        science,
        social,
        english,
        tamil,
      });

      await Mark.update(
        {
          remark,
          average_percentage: avg,
        },
        {
          where: { Student_id: id },
        }
      );

      console.log(avg, "is the average percentage");
      console.log("calculating the percentage and evaluating");
      console.log(avg, " ", remark);
      res.send("Marks added and evaluated.");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing marks.");
  }
};
