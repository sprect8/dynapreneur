f = open("data.json");


db = [];

lastLine = "";

lines = f.readlines();

f.close();

currRecord = {};

for l in lines:
	lastLine = l;
	if "--" in lastLine:
		db.append(currRecord);
		currRecord = {};
	l = l.strip();

	if len(l)  == 0: 
		continue
	
	l = l.split(":")

	if len(l) < 2:
		continue;

	name = l[0].strip()

	if (name == "Name"):
		name = "name";
	value = l[1].strip().replace("\t", "")

	currRecord[name] = value;

	if (name == "name"):
		name = value.replace(" ", "-").replace("\t", "") + ".png"
		currRecord["avatar"] = "/images/entrepreneurs/"+name

	currRecord["id"] = str(len(db))


db.append(currRecord);


print db
	


