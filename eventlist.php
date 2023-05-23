<!-- Content Header (Page header) -->
<div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">List of Events</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">List of Events</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    
      <div class="container-fluid">
        <div class="row">
        
          <div class="col-lg-12">
          <div class="card">
              <div class="card-body">
                <div class="table-scrollable">
          <table id="example1" width="100%" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>Event Name</th>
                    <th>Speaker</th>
                    <th>Position</th>
                    <th>Venue</th>
                    <th>Description</th>
                    <th>Date of Event</th>
                    <th>Time of Event</th>
                    <th>Created Event Date</th>
                    <th>Updated Event Date</th>
                    <th>Username</th>
                    <th>Status</th>

                    <th>Action</th>

                  </tr>
                  </thead>
                  <tbody>
                    <?php
                    include '../connection.php';
                    $sql = mysqli_query($con, "select * from tblevents order by id desc");
                    $i = 1;
                    while($result = mysqli_fetch_array($sql)){
                      ?>
                    <tr>
                    <td><?php
                    echo $i .'.'; $i++;
                    ?></td>

                    <td><?php
                    echo $result['EventName'];
                    ?>
                    </td>
                    <td><?php
                    echo $result['Speaker'];
                    ?></td>

                    <td>
                    <?php
                    echo $result['position'];
                    ?>
                    </td>

                    <td>
                      <?php
                    echo $result['Venue'];
                    ?>
                    </td>
                    <td>
                    <?php
                    echo $result['Description'];
                    ?>
                    </td>
                    <td>
                    <?php
                    echo $result['Date'];
                    ?>
                    </td>
                    <td>
                    <?php
                    echo $result['Time'];
                    ?>
                    </td>
                    <td>
                    <?php
                    echo $result['created_at'];
                    ?>
                    </td>

                    <td>
                      <?php
                    echo $result['updated_at'];
                    ?>
                    </td>
                    <td>
                    <?php
                    echo $result['Status'];
                    ?>
                    </td>

                    <td>
                      <?php
                    echo $result['Reason'];
                    ?>
                    </td>
                    <td>
                    <button>Approve</button>
                    <button>Decline</button>
                    <button>Edit</button>
                    <button>Recover</button>
                    <button>Delete</button>
                    
                    </td>
                  </tr>





                      <?php
                    }
                    ?>
                  
                    </tbody>
                  <tfoot>
                  <tr>
                    <th>#</th>
                    <th>Event Name</th>
                    <th>Speaker</th>
                    <th>Position</th>
                    <th>Venue</th>
                    <th>Description</th>
                    <th>Date of Event</th>
                    <th>Time of Event</th>
                    <th>Created Event Date</th>
                    <th>Updated Event Date</th>
                    <th>Username</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>

                  </tfoot>
                </table>
          </div>
          </div>
              </div>
          </div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
