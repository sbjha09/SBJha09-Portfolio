import Array "mo:core/Array";
import Time "mo:core/Time";
import Map "mo:core/Map";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let contactSubmissions = Map.empty<Int, ContactSubmission>();
  var nextSubmissionId = 0;

  var visitorCount = 0;

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };

    contactSubmissions.add(nextSubmissionId, submission);
    nextSubmissionId += 1;
  };

  public shared ({ caller }) func incrementVisitorCount() : async () {
    visitorCount += 1;
  };

  public query ({ caller }) func getVisitorCount() : async Int {
    visitorCount;
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray();
  };
};
